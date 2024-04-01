/**
 * This file is based on the rehypeShikiji plugin built for the nodejs.org website.
 * Even though it's rewritten to better fit the needs of this project, the original
 * code can be found here:
 * https://github.com/nodejs/nodejs.org
 *
 * MIT License
 *
 * Copyright Node.js Website WG contributors. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
"use strict";

import { toString } from "hast-util-to-string";
import type { HighlighterCore } from "shiki/core";
import { getHighlighterCore } from "shiki/core";
import getWasm from "shiki/wasm";
import { SKIP, visit } from "unist-util-visit";
import { CODE_HIGHLIGHTER_LANGUAGES, CODE_HIGHLIGHTER_THEME } from "./config";
import clsx from "clsx";

// Add extra languages here

type Data = {
  meta: string;
};
type WithData<T> = T & {
  data: Data;
};
type Root = WithData<Omit<import("hast").Root, "data">>;
type ElementContent = import("hast").ElementContent;
type Element = WithData<import("hast").Element>;

export const getShiki = () =>
  getHighlighterCore({
    themes: [CODE_HIGHLIGHTER_THEME],
    langs: CODE_HIGHLIGHTER_LANGUAGES,
    loadWasm: getWasm,
  });

export const highlightToHast =
  (shiki: HighlighterCore) => (code: string, language: string) =>
    shiki.codeToHast(code, { lang: language, theme: CODE_HIGHLIGHTER_THEME });

const languagePrefix = "language-";

function getMetaParameter(meta: unknown, key: string): string | undefined {
  if (typeof meta !== "string") {
    return;
  }

  const matches = meta.match(new RegExp(`${key}="(?<parameter>[^"]*)"`));
  const parameter = matches?.groups?.parameter;

  return parameter !== undefined && parameter.length > 0
    ? parameter
    : undefined;
}

function isPreBlock(node: ElementContent): node is Element {
  return Boolean(node.type === "element" && node.tagName === "pre");
}
function isCodeBlock(node: ElementContent): node is Element {
  return Boolean(node.type === "element" && node.tagName === "code");
}

export default function rehypeShikiji() {
  return async function (tree: Root) {
    const memoizedShiki = await getShiki();

    visit(tree, "element", (_, index: number, parent: Element) => {
      const languages = [];
      const displayNames = [];
      const codeTabsChildren = [];

      let defaultTab = "0";
      let currentIndex = index;

      let element = parent?.children[currentIndex];
      while (currentIndex && isPreBlock(element)) {
        const codeElement = element.children[0];

        if (isCodeBlock(codeElement)) {
          const displayName = getMetaParameter(
            codeElement.data?.meta,
            "displayName",
          );

          // We should get the language name from the class name
          if (
            Array.isArray(codeElement.properties.className) &&
            codeElement.properties.className.length
          ) {
            const className = codeElement.properties.className.join(" ");
            const matches = className.match(/language-(?<language>.*)/);

            languages.push(matches?.groups?.language ?? "text");
          }

          // Map the display names of each variant for the CodeTab
          displayNames.push(displayName?.replaceAll("|", "") ?? "");

          codeTabsChildren.push(element);

          // If `active="true"` is provided in a CodeBox
          // then the default selected entry of the CodeTabs will be the desired entry
          const specificActive = getMetaParameter(
            codeElement.data?.meta,
            "default",
          );

          if (specificActive === "true") {
            defaultTab = String(codeTabsChildren.length - 1);
          }
        }

        const nextNode = parent?.children[currentIndex + 1];

        // If the CodeBoxes are on the root tree the next Element will be
        // an empty text element so we should skip it
        currentIndex += nextNode && nextNode?.type === "text" ? 2 : 1;
        element = parent?.children[currentIndex];
      }

      if (codeTabsChildren.length >= 2) {
        const codeTabElement = {
          type: "element" as const,
          tagName: "CodeTabs",
          children: codeTabsChildren,
          properties: {
            languages: languages.join("|"),
            displayNames: displayNames.join("|"),
            defaultTab,
          },
        };

        // This removes all the original Code Elements and adds a new CodeTab Element
        // at the original start of the first Code Element
        if (index !== null && currentIndex !== null) {
          parent.children.splice(index, currentIndex - index, codeTabElement);
        }

        // Prevent visiting the code block children and for the next N Elements
        // since all of them belong to this CodeTabs Element
        return [SKIP];
      }

      if (codeTabsChildren.length == 1) {
        const codeBlockElement = {
          type: "element" as const,
          tagName: "CodeBlock",
          children: codeTabsChildren,
          properties: {},
        };

        // This removes all the original Code Elements and adds a new CodeTab Element
        // at the original start of the first Code Element
        if (index !== null && currentIndex !== null) {
          parent.children.splice(index, currentIndex - index, codeBlockElement);
        }

        // Prevent visiting the code block children and for the next N Elements
        // since all of them belong to this CodeTabs Element
        return [SKIP];
      }
    });

    visit(tree, "element", (node: Element, index: number, parent: Element) => {
      // We only want to process <pre>...</pre> elements
      if (!parent || index == null || !isPreBlock(node)) {
        return;
      }

      // We want the contents of the <pre> element, hence we attempt to get the first child
      const codeElement = node.children[0];

      // If thereÄs nothing inside the <pre> element... What are we doing here?
      if (
        !codeElement ||
        codeElement.type !== "element" ||
        !codeElement.properties
      ) {
        return;
      }

      // Ensure that we're not visiting a <code> element but it's inner contents
      // (keep iterating further down until we reach where we want)
      if (!isCodeBlock(codeElement)) {
        return;
      }

      // Get the <pre> element class names
      const preClassNames = codeElement.properties.className;

      // The current classnames should be an array and it should have a length
      if (!Array.isArray(preClassNames) || preClassNames.length === 0) {
        return;
      }

      // We want to retrieve the language class name from the class names
      const codeLanguage = preClassNames.find(
        (c) => typeof c === "string" && c.startsWith(languagePrefix),
      );

      // If we didn't find any `language-` classname then we shouldn't highlight
      if (typeof codeLanguage !== "string") {
        return;
      }

      // Retrieve the whole <pre> contents as a parsed DOM string
      const preElementContents = toString(codeElement as import("hast").Nodes);

      // Grabs the relevant alias/name of the language
      const languageId = codeLanguage.slice(languagePrefix.length);

      // Parses the <pre> contents and returns a HAST tree with the highlighted code
      const { children } = highlightToHast(memoizedShiki)(
        preElementContents,
        languageId,
      ) as Root & {
        children: Element[];
      };

      // Adds the original language back to the <pre> element
      children[0].properties.class = clsx(
        children[0].properties.class,
        codeLanguage,
      );

      const showCopyButton = getMetaParameter(
        codeElement.data?.meta,
        "showCopyButton",
      );

      // Adds a Copy Button to the CodeBox if requested as an additional parameter
      // And avoids setting the property (overriding) if undefined or invalid value
      if (showCopyButton && ["true", "false"].includes(showCopyButton)) {
        children[0].properties.showCopyButton = showCopyButton;
      }

      // Replaces the <pre> element with the updated one
      parent.children.splice(index, 1, ...children);
    });
  };
}
