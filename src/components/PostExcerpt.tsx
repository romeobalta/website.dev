import type { FC } from "react";
import PostDate from "./PostDate";

const PostExcerpt: FC = ({ title, date, children, href }) => {
  return (
    <section>
      <h1>
        <a href={href}>{title}</a>
      </h1>
      <PostDate date={date} />
      <p>{children}</p>
    </section>
  );
};

export default PostExcerpt;
