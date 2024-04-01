import { Command } from "commander";
import figlet from "figlet";
import { create } from "./commands/create";
import { publish } from "./commands/publish";

const program = new Command();

console.log(figlet.textSync("webie"));

program
  .name("webie")
  .description("CLI tool to assist with managing your website")
  .version("0.0.1");

program
  .command("create")
  .alias("c")
  .description("Create a new article")
  .action(create);

program
  .command("publish")
  .alias("p")
  .description("Publish articles")
  .action(publish);

await program.parseAsync(process.argv);
