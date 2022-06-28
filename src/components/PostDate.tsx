import { formatDate } from "@helpers/date";

const PostDate = ({ date }) => (
  <p className="font-light text-slate-500">&gt; {formatDate(date)}</p>
);

export default PostDate;
