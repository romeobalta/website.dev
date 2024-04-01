import chalk from "chalk";
import figures from "figures";
import { exec } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { promisify } from "node:util";

const error = chalk.bold.red;
const success = chalk.bold.green;
const write = (text: string) => console.log(text);
const writeln = (text: string) => console.log("\n" + text + "\n");

const execPromise = promisify(exec);

export async function update() {
  write(chalk.bold("Publish articles:\n"));

  const files: string[] = [];

  try {
    const { stdout } = await execPromise(
      "git --no-pager diff --name-only --cached",
    );

    stdout.split("\n").forEach((file) => {
      if (file.endsWith(".md") || file.endsWith(".mdx")) {
        files.push(file);
      }
    });

    const projectBasePath = join(__dirname, "..", "..", "..", "..");

    const promises = files.map(async (filename: string) => {
      const fullPath = join(projectBasePath, filename);

      let content = await readFile(fullPath, "utf-8");
      content = content.replace(
        /updatedAt:(.*)\n/,
        `updatedAt: "${new Date().toISOString()}"\n`,
      );
      await writeFile(fullPath, content);
      await execPromise(`git add ${filename}`);
    });

    await Promise.all(promises);
    writeln(success("✅ Articles updated: "));
    files.forEach((file) => {
      write(success(" " + figures.circleFilled + " " + file));
    });
  } catch (err) {
    writeln(error("Error updating articles"));
    writeln(err as string);
  }
}
