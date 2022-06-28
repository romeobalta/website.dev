import DefaultLayout from "./DefaultLayout";

const BlogLayout = ({ children, wide = false }) => (
  <DefaultLayout tagPrefix="blog" wide={wide}>
    {children}
  </DefaultLayout>
);

export default BlogLayout;
