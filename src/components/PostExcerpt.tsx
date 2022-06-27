import type { FC } from "react";

const PostExcerpt: FC = ({ title, date, children, href }) => {
  const formatDate = (date) =>
    new Date(date).toUTCString().replace(/(\d\d\d\d) .*/, "$1"); // remove everything after YYYY

  return (
    <section>
      <h1>
        <a href={href}>{title}</a>
      </h1>
      <p className="text-slate-600">{formatDate(date)}</p>
      <p>{children}</p>
    </section>
  );
};

export default PostExcerpt;
