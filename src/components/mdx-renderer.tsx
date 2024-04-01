import type { MDXComponents, MDXContent } from "mdx/types";
import type { FC } from "react";
import { AboutMe } from "./home/about-me";
import { LatestArticles } from "./home/latest-articles";
import { A } from "./ui/a";
import { Blockquote } from "./ui/blockquote";
import { Code, CodeBlock, CodeTabs } from "./ui/code";
import * as Headings from "./ui/headings";
import { WithList } from "./ui/list";
import { P } from "./ui/p";

const components: MDXComponents = {
  AboutMe,
  LatestArticles,
  CodeTabs: CodeTabs,
  CodeBlock: CodeBlock,

  // Common components
  h1: Headings.H1,
  h2: Headings.H2,
  h3: Headings.H3,
  h4: Headings.H4,
  h5: Headings.H5,
  h6: Headings.H6,

  pre: Code,
  blockquote: Blockquote,
  p: P,
  a: A,
  ul: WithList(false),
  ol: WithList(true),
};

export const MDXRenderer: FC<{ Component: MDXContent }> = ({ Component }) => (
  <Component components={components} />
);
