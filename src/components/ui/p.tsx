import { DetailedHTMLProps } from "react";

type PProps = DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export function P({ children, className, ...props }: PProps) {
  return (
    <p className="my-5 w-full max-w-2xl" {...props}>
      {children}
    </p>
  );
}
