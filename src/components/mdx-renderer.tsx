import type { MDXComponents, MDXContent } from "mdx/types";
import type { FC } from "react";
import { LatestArticles } from "./home/latest-articles";
import { Section } from "./home/section";
import { A } from "./ui/a";
import { Blockquote } from "./ui/blockquote";
import { Code, CodeBlock, CodeTabs, Pre } from "./ui/code";
import * as Headings from "./ui/headings";
import { Img } from "./ui/img";
import { WithList } from "./ui/list";
import { P } from "./ui/p";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { LI } from "./ui/li";

const components: MDXComponents = {
  CodeBlock,
  CodeTabs,
  Img,
  LatestArticles,
  Section,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,

  // Common components
  a: A,
  blockquote: Blockquote,
  code: Code,
  h1: Headings.H1,
  h2: Headings.H2,
  h3: Headings.H3,
  h4: Headings.H4,
  h5: Headings.H5,
  h6: Headings.H6,
  img: Img,
  li: LI,
  ol: WithList(true),
  p: P,
  pre: Pre,
  ul: WithList(false),

  table: Table,
  tbody: TableBody,
  td: TableCell,
  tfoot: TableFooter,
  th: TableHead,
  thead: TableHeader,
  tr: TableRow,
};

export const MDXRenderer: FC<{ Component: MDXContent }> = ({ Component }) => (
  <Component components={components} />
);
