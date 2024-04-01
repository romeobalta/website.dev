import { cn } from "@/util";
import Link from "next/link";

interface ArticleBoxProps {
  title: string;
  description: string;
  category: string | null;
  publishedAt: string;
  slug: string;
  className?: string;
}

export function ArticleBox({
  title,
  description,
  category,
  publishedAt,
  slug,
  className = "",
}: ArticleBoxProps) {
  return (
    <Link
      href={`/article/${slug}`}
      className={cn(
        `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950`,
        className,
      )}
    >
      <div className={cn(`w-full flex flex-row group gap-x-5 gap-y-2`)}>
        <div className="w-full flex flex-col justify-start gap-y-2">
          <h1 className="w-full -mt-0.5 font-roboto text-xl leading-5 font-bold group-hover:underline">
            {title}
          </h1>

          <span className="flex-1 w-full block text-md text-left font-roboto font-light">
            {publishedAt && (
              <>
                {" "}
                on
                <span className="font-bold uppercase font-roboto-condensed">
                  {" "}
                  {new Date(publishedAt).toLocaleDateString("en-us", {
                    year: "numeric",
                    day: "2-digit",
                    month: "long",
                  })}
                </span>
              </>
            )}
            {category && (
              <>
                {" "}
                in
                <span className="font-bold uppercase font-roboto-condensed">
                  {" "}
                  {category}
                </span>
              </>
            )}
          </span>

          <h2 className="w-full font-roboto font-normal text-base leading-[1.175rem] text-neutral-400">
            {description}
          </h2>
        </div>
      </div>
    </Link>
  );
}
