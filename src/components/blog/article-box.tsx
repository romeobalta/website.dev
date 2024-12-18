import { cn } from "@/util";
import { A } from "../ui/a";

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
    <div
      className={cn("w-full flex flex-col justify-start gap-y-2", className)}
    >
      <A href={url}>{title}</A>

      <span className="flex-1 w-full block text-sm text-left text-muted-foreground">
        {publishedAt && (
          <>
            on
            <span className="uppercase">
              {" " +
                new Date(publishedAt).toLocaleDateString("en-us", {
                  year: "numeric",
                  day: "2-digit",
                  month: "long",
                })}
            </span>
          </>
        )}
        {category && (
          <>
            {" in"}
            <span className="uppercase"> {category}</span>
          </>
        )}
      </span>

      <p className="w-full">{description}</p>
    </div>
  );
}
