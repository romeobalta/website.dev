"use strict";

import classNames from "classnames";
import { toString } from "hast-util-to-string";
import type { HighlighterCore } from "shiki/core";
import { getHighlighterCore } from "shiki/core";
import getWasm from "shiki/wasm";
import { SKIP, visit } from "unist-util-visit";
import githubDarkDefault from "shiki/themes/github-dark-default.mjs";
import js from "shiki/langs/javascript.mjs";
import ts from "shiki/langs/typescript.mjs";
import jsx from "shiki/langs/jsx.mjs";
import tsx from "shiki/langs/tsx.mjs";

export const getShiki = () =>
  getHighlighterCore({
    themes: [githubDarkDefault],
    langs: [js, ts, jsx, tsx],
    loadWasm: getWasm,
  });

export const highlightToHast =
  (shiki: HighlighterCore) => (code: string, language: string) =>
    shiki.codeToHast(code, { lang: language, theme: githubDarkDefault });

// This is what Remark will use as prefix within a <pre> className
// to attribute the current language of the <pre> element
const languagePrefix = "language-";

/**
 * Retrieve the value for the given meta key.
 *
 * @example - Returns "CommonJS"
 * getMetaParameter('displayName="CommonJS"', 'displayName');
 *
 * @param {any} meta - The meta parameter.
 * @param {string} key - The key to retrieve the value.
 *
 * @return {string | undefined} - The value related to the given key.
 */
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

type Node = import("hast").Node & {
  data?: import("unist").Data & { meta?: string };
  tagName: string;
  children: Array<Node>;
  properties: {
    className?: Array<string>;
    class?: string;
    languages?: string;
    displayNames?: string;
    defaultTab?: string;
    showCopyButton?: "true" | "false";
  };
};

/**
 * Checks if the given node is a valid code element.
 *
 * @param {import('unist').Node} node - The node to be verified.
 *
 * @return {boolean} - True when it is a valid code element, false otherwise.
 */
function isCodeBlock(node: Node): boolean {
  return Boolean(
    node?.tagName === "pre" && node?.children[0].tagName === "code",
  );
}

export default function rehypeShikiji() {
  return async function (tree: any) {
    // We do a top-level await, since the Unist-tree visitor
    // is synchronous, and it makes more sense to do a top-level
    // await, rather than an await inside the visitor function
    const memoizedShiki = await getShiki();

    visit(tree, "element", (_, index, parent: Node) => {
      const languages = [];
      const displayNames = [];
      const codeTabsChildren = [];

      let defaultTab = "0";
      let currentIndex = index;

      while (currentIndex && isCodeBlock(parent?.children[currentIndex])) {
        const codeElement = parent?.children[currentIndex].children[0];

        const displayName = getMetaParameter(
          codeElement.data?.meta,
          "displayName",
        );

        // We should get the language name from the class name
        if (codeElement.properties.className?.length) {
          const className = codeElement.properties.className.join(" ");
          const matches = className.match(/language-(?<language>.*)/);

          languages.push(matches?.groups?.language ?? "text");
        }

        // Map the display names of each variant for the CodeTab
        displayNames.push(displayName?.replaceAll("|", "") ?? "");

        codeTabsChildren.push(parent?.children[currentIndex]);

        // If `active="true"` is provided in a CodeBox
        // then the default selected entry of the CodeTabs will be the desired entry
        const specificActive = getMetaParameter(
          codeElement.data?.meta,
          "active",
        );

        if (specificActive === "true") {
          defaultTab = String(codeTabsChildren.length - 1);
        }

        const nextNode = parent?.children[currentIndex + 1];

        // If the CodeBoxes are on the root tree the next Element will be
        // an empty text element so we should skip it
        currentIndex += nextNode && nextNode?.type === "text" ? 2 : 1;
      }

      if (codeTabsChildren.length >= 2) {
        const codeTabElement = {
          type: "element",
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
    });

    visit(tree, "element", (node: Node, index, parent: Node) => {
      // We only want to process <pre>...</pre> elements
      if (!parent || index == null || node.tagName !== "pre") {
        return;
      }

      // We want the contents of the <pre> element, hence we attempt to get the first child
      const preElement = node.children[0];

      // If thereÄs nothing inside the <pre> element... What are we doing here?
      if (!preElement || !preElement.properties) {
        return;
      }

      // Ensure that we're not visiting a <code> element but it's inner contents
      // (keep iterating further down until we reach where we want)
      if (preElement.type !== "element" || preElement.tagName !== "code") {
        return;
      }

      // Get the <pre> element class names
      const preClassNames = preElement.properties.className;

      // The current classnames should be an array and it should have a length
      if (typeof preClassNames !== "object" || preClassNames.length === 0) {
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
      const preElementContents = toString(preElement as import("hast").Nodes);

      // Grabs the relevant alias/name of the language
      const languageId = codeLanguage.slice(languagePrefix.length);

      // Parses the <pre> contents and returns a HAST tree with the highlighted code
      const { children } = highlightToHast(memoizedShiki)(
        preElementContents,
        languageId,
      );

      // Adds the original language back to the <pre> element
      // @ts-expect-error
      children[0].properties.class = classNames(
        // @ts-expect-error
        children[0].properties.class,
        codeLanguage,
      );

      const showCopyButton = getMetaParameter(
        preElement.data?.meta,
        "showCopyButton",
      );

      // Adds a Copy Button to the CodeBox if requested as an additional parameter
      // And avoids setting the property (overriding) if undefined or invalid value
      if (showCopyButton && ["true", "false"].includes(showCopyButton)) {
        // @ts-expect-error
        children[0].properties.showCopyButton = showCopyButton;
      }

      // Replaces the <pre> element with the updated one
      // @ts-expect-error
      parent.children.splice(index, 1, ...children);
    });
  };
}
