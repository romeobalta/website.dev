import {
  getContentData,
  getContentFiles,
  getContentPaths,
} from "@/content-loader";
import { Separator, input, select } from "@inquirer/prompts";
import chalk from "chalk";
import { mkdir } from "fs/promises";
import GithubSlugger from "github-slugger";
import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join } from "path";

const error = chalk.bold.red;
const success = chalk.bold.green;
const warning = chalk.hex("#FFA500"); // Orange color

type Article = {
  title?: string;
  category?: string | null;
  url?: string;
};
export async function create() {
  console.log(chalk.bold("Create a new article\n"));

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
      console.log(
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
    console.log(success(`✅ Article created at ${fullPath}`));
  } catch (err) {
    console.log(error(`Error creating article at ${fullPath}: ${err}`));
  }
}
