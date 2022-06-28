import DefaultLayout from "./DefaultLayout";

const BlogLayout = ({ children, navigation, wide = false }) => (
  <DefaultLayout tagPrefix="blog" wide={wide} navigation={navigation}>
    {children}
  </DefaultLayout>
);

export default BlogLayout;
