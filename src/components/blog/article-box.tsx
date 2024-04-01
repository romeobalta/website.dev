import { cn } from "@/util";
import Link from "next/link";

type ArticleBoxProps = {
  title: string;
  description: string;
  category: string | null;
  publishedAt: string;
  url: string;
  className?: string;
};

export function ArticleBox({
  title,
  description,
  category,
  publishedAt,
  url,
  className = "",
}: ArticleBoxProps) {
  return (
    <Link
      href={url}
      className={cn(
        `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-foreground`,
        className,
      )}
    >
      <div className={cn(`w-full flex flex-row group gap-x-5 gap-y-2`)}>
        <div className="w-full flex flex-col justify-start gap-y-2">
          <h1 className="w-full -mt-0.5 font-roboto text-2xl font-bold">
            {title}
          </h1>

          <span className="flex-1 w-full block text-md text-left font-roboto text-muted-foreground">
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

          <h2 className="w-full font-roboto font-normal text-base text-muted-foreground">
            {description}
          </h2>
        </div>
      </div>
    </Link>
  );
}
