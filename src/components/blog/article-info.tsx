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
    <div
      className={cn(
        "font-jetbrains-mono text-sm w-full max-w-2xl text-muted-foreground",
        className,
      )}
    >
      on <span className="font-bold uppercase">{date}</span> in{" "}
      <Link href={link}>
        <span className="font-bold underline underline-offset-4 uppercase">
          {name}
        </span>
      </Link>{" "}
      <span className="block">{readingTime} read</span>
    </div>
  );
}
