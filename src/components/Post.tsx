import type { FC } from "react";

const Post: FC = ({ post, children }) => {
  const formatDate = (date) =>
    new Date(date).toUTCString().replace(/(\d\d\d\d) .*/, "$1"); // remove everything after YYYY

  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <p className="font-extralight">{formatDate(post.frontmatter.date)}</p>
      {children}
    </>
  );
};

export default Post;
