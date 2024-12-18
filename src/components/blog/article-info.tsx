import { cn } from "@/util";
import Link from "next/link";

type ArticleInfoProps = {
  className?: string;
  name?: string;
  slug?: string;
  date?: string;
  readingTime?: string;
};

export function ArticleInfo({
  name,
  slug,
  className,
  date,
  readingTime,
}: ArticleInfoProps) {
  const link = `/category/${slug}`;

  return (
    <div className={cn("text-sm w-full text-muted-foreground", className)}>
      on <span className="font-extrabold uppercase">{date}</span> in{" "}
      <Link
        href={link}
        className="underline underline-offset-4 uppercase text-link"
      >
        {name}
      </Link>{" "}
      <span className="block">{readingTime} read</span>
    </div>
  );
}
