import type { MDXComponents, MDXContent } from "mdx/types";
import type { FC } from "react";
import { AboutMe } from "./home/about-me";
import { LatestArticles } from "./home/latest-articles";
import * as Headings from "./common/headings";
import { Code, CodeBlock, CodeTabs } from "./common/code";
import { Blockquote } from "./common/blockquote";
import { P } from "./common/p";
import { A } from "./common/a";
import { WithList } from "./common/list";

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
