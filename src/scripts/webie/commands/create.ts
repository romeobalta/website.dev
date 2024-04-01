import { EDITOR, EDITOR_IS_TERMINAL } from "@/config";
import {
  getContentData,
  getContentFiles,
  getContentPaths,
} from "@/content-loader";
import { Separator, input, select } from "@inquirer/prompts";
import chalk from "chalk";
import { mkdir } from "fs/promises";
import GithubSlugger from "github-slugger";
import { exec, spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join } from "path";

const error = chalk.bold.red;
const success = chalk.bold.green;
const warning = chalk.hex("#FFA500");
const write = (text: string) => console.log(text);
const writeln = (text: string) => console.log("\n" + text + "\n");

type Article = {
  title?: string;
  category?: string | null;
  url?: string;
};
export async function create() {
  write(chalk.bold("Create a new article\n"));

  const data: Article = {};

  data.title = await input({
    message: "Title: ",
  });
  const files = await getContentFiles();
  const { categories } = await getContentData(files);
  data.category = await select({
    message: "Category: ",
    choices: [
      ...categories.map((category) => ({
        value: category,
        name: category,
      })),
      new Separator(),
      { name: "create new", value: null },
    ],
  });

  if (!data.category) {
    data.category = await input({
      message: "New category: ",
    });
  }

  const slugger = new GithubSlugger();

  const paths = getContentPaths(files);
  let defaultUrl = slugger.slug(data.title);
  let fullUrl = `/article/${defaultUrl}`;

  let index = 0;
  while (paths.has(fullUrl)) {
    index += 1;
    if (index === 1) {
      writeln(
        warning(`⚠️ An article with the url "${defaultUrl}" already exists.`),
      );
    }
    if (index > 1) {
      defaultUrl = defaultUrl.replace(/\d+$/, index.toString());
      fullUrl = `/article/${defaultUrl}`;
      continue;
    }
    defaultUrl = `${defaultUrl}-${index}`;
    fullUrl = `/article/${defaultUrl}`;
  }

  data.url = await input({
    message: `What url would you like to use for this article?`,
    default: defaultUrl,
    theme: {
      style: {
        defaultAnswer: (text: string) => {
          return chalk.dim(text);
        },
      },
    },
  });

  fullUrl = `/article/${data.url}`;
  if (!data.url || paths.has(fullUrl)) {
    data.url = defaultUrl;
  }

  // get path relative to current file
  const fullPath = join(__dirname, "../../../content/", `${fullUrl}.mdx`);

  const fileContent = `---
title: ${data.title}
description: 
category: ${data.category}
publishedAt: 
layout: article
---`;

  // create file `${data.url}.mdx` using fs
  try {
    // check if directory exists
    const directory = fullPath.split("/").slice(0, -1).join("/");

    if (!existsSync(directory)) {
      // create directory
      await mkdir(directory, { recursive: true });
    }

    await writeFile(fullPath, fileContent, "utf8");
    writeln(success(`✅ Article created at ${fullPath}`));

    if (EDITOR) {
      if (EDITOR_IS_TERMINAL) {
        spawn(EDITOR, [fullPath], { stdio: "inherit" });
        return;
      }

      exec(`${EDITOR} ${fullPath}`, (err) => {
        if (err) {
          writeln(error(`Error opening file: ${err}`));
          return;
        }
      });
    }

    // open vim to edit the file
  } catch (err) {
    writeln(error(`Error creating article at ${fullPath}: ${err}`));
  }
}
