import type { FC } from "react";
import PostExcerpt from "@components/PostExcerpt";

const PostList: FC = (props) => {
  const getPostUrlFromFile = (file) => {
    const path = file.split("/");
    const [filename] = path.splice(-1)[0].split(".");

    return `\\post\\${filename}`;
  };

  return (
    <>
      {(props?.posts ?? []).map((post) => (
        <PostExcerpt
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          href={getPostUrlFromFile(post.file)}
        >
          {post.frontmatter.description}
        </PostExcerpt>
      ))}
    </>
  );
};

export default PostList;
