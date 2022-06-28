import type { FC } from "react";
import PostExcerpt from "@components/PostExcerpt";
import { getPostUrlFromFile } from "@helpers/postUrl";

const PostList: FC = (props) => (
  <>
    {(props?.posts ?? []).map((post) => (
      <PostExcerpt
        key={post.frontmatter.title}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        href={getPostUrlFromFile(post.file)}
      >
        {post.frontmatter.description}
      </PostExcerpt>
    ))}
  </>
);

export default PostList;
