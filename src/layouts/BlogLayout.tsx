import type { FC } from "react";
import DefaultLayout from "./DefaultLayout";

const BlogLayout: FC = ({ children, navigation, wide = false }) => (
  <DefaultLayout tagPrefix="blog" wide={wide} navigation={navigation}>
    {children}
  </DefaultLayout>
);

export default BlogLayout;
