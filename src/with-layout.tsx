import type { PropsWithChildren } from "react";

import { ArticleLayout } from "./layouts/article";
import { CategoryLayout } from "./layouts/category";
import { HomeLayout } from "./layouts/home";

const layouts = {
  home: HomeLayout,
  article: ArticleLayout,
  category: CategoryLayout,
};

export type Layouts = keyof typeof layouts;

type WithLayoutProps<L = Layouts> = PropsWithChildren<{ layout: L }> & {
  metadata?: any;
};

const WithLayout = ({
  layout,
  metadata = {},
  children,
}: WithLayoutProps<Layouts>) => {
  const LayoutComponent = layouts[layout] ?? HomeLayout;

  return <LayoutComponent {...metadata}>{children}</LayoutComponent>;
};

export default WithLayout;
