import type { PropsWithChildren } from "react";

type Layouts = "home";

import { HomeLayout } from "./layouts/home";
import { ArticleLayout } from "./layouts/article";
import { ArticlesLayout } from "./layouts/articles";

const layouts = {
  home: HomeLayout,
  article: ArticleLayout,
  articles: ArticlesLayout,
};

type WithLayoutProps<L = Layouts> = PropsWithChildren<{ layout: L }> & {
  metadata: any;
};

const WithLayout = ({
  layout,
  metadata,
  children,
}: WithLayoutProps<Layouts>) => {
  const LayoutComponent = layouts[layout] ?? HomeLayout;

  return <LayoutComponent {...metadata}>{children}</LayoutComponent>;
};

export default WithLayout;
