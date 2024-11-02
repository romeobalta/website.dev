import { cn } from "@/util";
import { DetailedHTMLProps } from "react";

type HeadingProps = DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const commonClasses = "my-5 w-full font-jetbrains-mono font-black";

export function H1({ children, className, ...props }: HeadingProps) {
  return (
    <h1 className={cn(commonClasses, "text-3xl", className)} {...props}>
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: HeadingProps) {
  return (
    <h2 className={cn(commonClasses, "text-2xl", className)} {...props}>
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: HeadingProps) {
  return (
    <h3 className={cn(commonClasses, "text-xl", className)} {...props}>
      {children}
    </h3>
  );
}

export function H4({ children, className, ...props }: HeadingProps) {
  return (
    <h4 className={cn(commonClasses, className)} {...props}>
      {children}
    </h4>
  );
}

export function H5({ children, className, ...props }: HeadingProps) {
  return (
    <h5 className={cn(commonClasses, "text-sm", className)} {...props}>
      {children}
    </h5>
  );
}

export function H6({ children, className, ...props }: HeadingProps) {
  return (
    <h6
      className={cn(commonClasses, "text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </h6>
  );
}
