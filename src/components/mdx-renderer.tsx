import type { MDXComponents, MDXContent } from "mdx/types";
import type { FC } from "react";

import { AboutMe } from "./home/about-me";

const components: MDXComponents = {
  AboutMe,
};

export const MDXRenderer: FC<{ Component: MDXContent }> = ({ Component }) => (
  <Component components={components} />
);
