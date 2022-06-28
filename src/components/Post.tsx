import type { FC } from "react";
import PostDate from "./PostDate";

const Post: FC = ({ post, children }) => {
  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <PostDate date={post.frontmatter.date} />
      {children}
    </>
  );
};

export default Post;
