import { glob } from "glob";
import { createReadStream } from "node:fs";
import readline from "node:readline";
import { basename, extname, join } from "path";
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

export async function getContentData(files: string[]): Promise<{
  articles: {
    [key: string]: string;
  }[];
  categories: string[];
  site: {
    [key: string]: string;
  };
}> {
  let counter = 0;
  const categories = new Set<string>(["all"]);
  const articles: {
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

          switch (metadata.layout) {
            case "article":
              articles.push({
                ...metadata,
                url: `/article/${basename(filename, extname(filename))}`,
              });
              categories.add(metadata.category);
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
  return { articles, categories: Array.from(categories), site };
}
