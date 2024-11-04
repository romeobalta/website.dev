import { cn } from "@/util";
import { H3 } from "../ui/headings";

type SectionProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ children, title, className }: SectionProps) {
  return (
    <div className={cn("section w-full mt-5 [&>*:last-child]:mb-0", className)}>
      {title && <H3 className="!mb-5">{title}</H3>}
      {children}
    </div>
  );
}
