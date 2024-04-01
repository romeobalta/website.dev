import { glob } from "glob";
import { createReadStream } from "node:fs";
import readline from "node:readline";
import { basename, extname, join, normalize } from "path";
import { IS_DEMO } from "./config";
import graymatter from "gray-matter";

export async function getContentFiles() {
  const files = (
    await glob("**/*.{md,mdx}", {
      cwd: process.cwd(),
      ignore: ["node_modules/**", "README.md"],
    })
  ).filter((filename) =>
    IS_DEMO
      ? filename.startsWith("src/demo-content")
      : filename.startsWith("src/content"),
  );

  return files;
}

export function getContentPaths(files: string[]) {
  const pathToFilename = files.map((filename) => {
    let pathname = filename
      .replace(/((\/)?(index))?\.mdx?$/i, "")
      .replace(/src\/(demo-)?content/, "/");

    pathname = normalize(pathname).replace(".", "");

    return [pathname, filename];
  }) as [string, string][];

  return new Map<string, string>(pathToFilename);
}

export async function getContentData(files: string[]): Promise<{
  articles: {
    [key: string]: string;
  }[];
  drafts: {
    [key: string]: string;
  }[];
  categories: Map<string, { [key: string]: string }>;
  site: {
    [key: string]: string;
  };
}> {
  let counter = 0;
  const categories = new Map<string, { [key: string]: string }>([["all", {}]]);
  const articles: {
    [key: string]: string;
  }[] = [];
  const drafts: {
    [key: string]: string;
  }[] = [];

  let site: {
    [key: string]: string;
  } = {};

  const rawMetadata: { [key: string]: [number, string] } = {};
  const promises = files.map(
    (filename) =>
      new Promise<void>((resolve) => {
        const readStream = createReadStream(join(process.cwd(), filename));
        const readLine = readline.createInterface({ input: readStream });

        rawMetadata[filename] = [0, ""];

        readLine.on("line", (line) => {
          rawMetadata[filename][1] += `${line}\n`;

          if (line.startsWith("---")) {
            rawMetadata[filename][0] += 1;
          }

          if (rawMetadata[filename][0] === 2) {
            readLine.close();
            readStream.close();
          }
        });

        readLine.on("close", () => {
          counter += 1;
          const metadata = graymatter(rawMetadata[filename][1]).data;

          // TODO: convert all dates to Date objects in the metadata, this will optimize some stuff later
          switch (metadata.layout) {
            case "article":
              // If article is not published
              const url = `/article/${basename(filename, extname(filename))}`;
              if (!metadata.publishedAt) {
                drafts.push({
                  ...metadata,
                  url,
                  filename,
                });
                return resolve();
              }

              // If article is published
              articles.push({
                ...metadata,
                url,
              });

              // Update the last modified date of the "all" category
              if (
                new Date(metadata.publishedAt).getTime() >
                new Date(categories.get("all")?.updatedAt || 0).getTime()
              ) {
                categories.set("all", {
                  updatedAt: metadata.updatedAt,
                });
              }

              if (metadata.category) {
                if (!categories.has(metadata.category)) {
                  categories.set(metadata.category, {
                    updatedAt: metadata.updatedAt,
                  });

                  return resolve();
                }

                // Update the last modified date of the category
                if (
                  new Date(metadata.publishedAt).getTime() >
                  new Date(
                    categories.get(metadata.category)?.updatedAt || 0,
                  ).getTime()
                ) {
                  categories.set(metadata.category, {
                    updatedAt: metadata.updatedAt,
                  });
                }
              }

              break;
            case "home":
              site = {
                author: metadata.author,
              };

              break;
            default:
              break;
          }

          resolve();
        });
      }),
  );

  await Promise.all(promises);
  return { articles, drafts, categories, site };
}

export function getArticles(
  articles: { [key: string]: string }[],
  count?: number,
) {
  return articles
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, count);
}

export function getArticlesByCategory(
  articles: { [key: string]: string }[],
  category: string,
) {
  return articles
    .filter((article) => article.category === category)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getCategoriesPaths(categories: string[]) {
  return new Map(
    categories.map((category) => [join("/category", category), "category"]),
  );
}
