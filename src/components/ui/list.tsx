import { cn } from "@/util";
import { DetailedHTMLProps } from "react";

type ListProps = DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

export function WithList(ordered: boolean) {
  return function List({ children, className, ref, ...props }: ListProps) {
    const ListTag = ordered ? "ol" : "ul";

    return (
      <ListTag
        className={cn(
          "pl-5 mb-5 [&_&]:mb-0 w-full",
          ordered
            ? "list-decimal pl-8 marker:text-muted-foreground"
            : "list-disc",
        )}
        {...props}
      >
        {children}
      </ListTag>
    );
  };
}
