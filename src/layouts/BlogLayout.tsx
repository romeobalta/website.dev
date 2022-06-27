import DefaultLayout from "./DefaultLayout";

const BlogLayout = ({ children }) => (
  <DefaultLayout tagPrefix="blog">{children}</DefaultLayout>
);

export default BlogLayout;
