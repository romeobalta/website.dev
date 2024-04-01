import { getContentData, getContentFiles } from "@/content-loader";
import { checkbox } from "@inquirer/prompts";
import chalk from "chalk";
import figures from "figures";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const error = chalk.bold.red;
const success = chalk.bold.green;
const write = (text: string) => console.log(text);
const writeln = (text: string) => console.log("\n" + text + "\n");

export async function publish() {
  write(chalk.bold("Publish articles:\n"));

  const files = await getContentFiles();
  const { drafts } = await getContentData(files);

  const answer = await checkbox({
    message: "Select articles to publish",
    choices: drafts.map((draft) => ({
      name: draft.title,
      value: draft.filename,
    })),
    theme: {
      icon: {
        checked: " " + chalk.green(figures.circleFilled),
        unchecked: " " + figures.circle,
        cursor: figures.pointer,
      },
    },
  });

  const projectBasePath = join(__dirname, "..", "..", "..", "..");

  const promises = answer.map(async (filename: string) => {
    const fullPath = join(projectBasePath, filename);

    let content = await readFile(fullPath, "utf-8");
    content = content.replace(
      /publishedAt:(.*)\n/,
      `publishedAt: "${new Date().toISOString()}"\n`,
    );
    await writeFile(fullPath, content);
  });

  await Promise.all(promises)
    .then(() => {
      writeln(success("✅ Articles published"));
    })
    .catch((err) => {
      writeln(error("Error publishing articles"));
      writeln(err);
    });
}
