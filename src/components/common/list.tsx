import { cn } from "@/util";

export function WithList(ordered: boolean) {
  return function List({ children }: { children?: React.ReactNode }) {
    const ListTag = ordered ? "ol" : "ul";
    return (
      <ListTag
        className={cn(ordered ? "list-decimal" : "list-disc", "pl-5 w-full")}
      >
        {children}
      </ListTag>
    );
  };
}
