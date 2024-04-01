import type { MDXComponents, MDXContent } from "mdx/types";
import type { FC } from "react";

import { AboutMe } from "./home/about-me";
import { LatestArticles } from "./home/latest-articles";

const components: MDXComponents = {
  AboutMe,
  LatestArticles,
};

export const MDXRenderer: FC<{ Component: MDXContent }> = ({ Component }) => (
  <Component components={components} />
);
