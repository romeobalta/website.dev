import { input } from "@inquirer/prompts";
import GithubSlugger from "github-slugger";
import chalk from "chalk";

export async function generateSlug() {
  const title = await input({
    message: "Title: ",
  });

  const slugger = new GithubSlugger();
  const slug = slugger.slug(title);

  console.log(chalk.green(`Slug: ` + slug));
}
