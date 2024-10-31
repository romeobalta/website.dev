import { DetailedHTMLProps } from "react";

type LIProps = DetailedHTMLProps<
  React.HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

export function LI({ children, className, ...props }: LIProps) {
  return (
    <li {...props} className="[&>p]:my-0 [&>p]:w-auto [&>p]:max-w-none">
      {children}
    </li>
  );
}
