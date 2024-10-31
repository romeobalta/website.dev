import { DetailedHTMLProps } from "react";

type BlockquoteProps = DetailedHTMLProps<
  React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;

export function Blockquote({ children, className, ...props }: BlockquoteProps) {
  return (
    <blockquote
      className="relative my-5 pl-5 border-l-4 border-muted-foreground text-muted-foreground italic"
      {...props}
    >
      {children}
    </blockquote>
  );
}
