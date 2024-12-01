import { cn } from "@/util";
import { DetailedHTMLProps } from "react";

type BlockquoteProps = DetailedHTMLProps<
  React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
> & {
  special?: string;
};

export function Blockquote({ children, className, ...props }: BlockquoteProps) {
  if (props.special) {
    return (
      <SpecialBlockquote special={props.special} {...props}>
        {children}
      </SpecialBlockquote>
    );
  }

  return (
    <blockquote
      className="relative my-5 pl-5 border-l-4 border-muted-foreground text-muted-foreground italic"
      {...props}
    >
      {children}
    </blockquote>
  );
}

function SpecialBlockquote({
  children,
  special,
  ...props
}: {
  children: React.ReactNode;
  special: string;
}) {
  let color = "text-muted-foreground border-muted-foreground";

  switch (special.toUpperCase()) {
    case "NOTE":
    case "INFO":
      color = "text-blue-600 bg-blue-600/15 border-blue-600";
      break;
    case "TIP":
      color = "text-emerald-600 bg-emerald-600/15 border-emerald-600";
      break;
    case "IMPORTANT":
      color = "text-violet-600 bg-violet-600/15 border-violet-600";
      break;
    case "WARNING":
      color = "text-yellow-600 bg-yellow-600/15 border-yellow-600";
      break;
    case "CAUTION":
    case "DANGER":
    case "ERROR":
      color = "text-red-600 bg-red-600/15 border-red-600";
      break;
  }

  return (
    <div className={cn("border px-3 py-3 mb-5", color)} {...props}>
      <p className="text-[14px] mb-2 font-black">{special}</p>
      <div className="text-foreground [&_p]:mb-0">{children}</div>
    </div>
  );
}
