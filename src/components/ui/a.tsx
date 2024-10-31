import Link from "next/link";
import { DetailedHTMLProps } from "react";

type AProps = DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function A({ children, href = "#", className, ...props }: AProps) {
  return (
    <Link
      href={href}
      className="underline underline-offset-4 text-blue-500 dark:text-sky-500"
      {...props}
    >
      {children}
    </Link>
  );
}
