import { cn } from "@/util";
import { isValidElement } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

type PreProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  noCopy?: boolean;
  name?: string;
  filename?: string;
};

export function Pre({ children, className, ...props }: PreProps) {
  const matches = className?.match(/language-(?<language>.*)/);
  const language = matches?.groups?.language ?? "";
  const { filename } = props;

  let content = children;

  if (isValidElement(content)) {
    const code = content.props.children as React.ReactNode[];

    if (
      typeof content.type === "function" &&
      content.type.name &&
      Array.isArray(code)
    ) {
      content = (
        <code className="flex flex-col px-4 pb-3 pt-8 w-auto">
          {code
            .map((line, lineIndex) => {
              if (!isValidElement(line)) {
                return line;
              }

              return (
                <span
                  key={lineIndex}
                  className="relative [counter-increment:line] min-w-0 pl-8 after:absolute after:left-0 after:top-0 after:mr-4 after:w-4.5 after:text-right after:leading-7 after:text-[#8B949E] after:[content:counter(line)] h-6"
                >
                  {line.props.children}
                </span>
              );
            })
            .slice(0, -2)}
        </code>
      );
    }
  }

  return (
    <div className="border flex-1 relative group overflow-x-hidden">
      <span className="absolute top-1 left-4 text-muted select-none group-hover:text-muted-foreground transition-colors">
        {filename ?? "." + language}
      </span>
      <pre
        className={cn(className, "flex overflow-x-scroll")}
        {...props}
        tabIndex={0}
      >
        {content}
      </pre>
    </div>
  );
}

type CodeBlockProps = {
  children: React.ReactNode;
};

export function CodeBlock({ children }: CodeBlockProps) {
  return (
    <div className="my-4 flex flex-row justify-center w-full">{children}</div>
  );
}

type CodeTabsProps = {
  children: React.ReactNode[];
  languages: string;
  names: string;
  defaultTab?: string;
};

export function CodeTabs({
  children,
  languages: rawLanguages,
  names: rawDisplayNames,
  defaultTab = "O",
}: CodeTabsProps) {
  const languages = rawLanguages.split("|");
  const names = rawDisplayNames.split("|") ?? [];

  const tabs = languages.map((language, index) => {
    const name = names[index] || language;
    const key = `${language}-${index}`;

    return (
      <TabsTrigger
        key={key}
        value={key}
        className="data-[state=active]:bg-code-tab data-[state=active]:border-border border border-b-0 border-transparent data-[state=active]:shadow-none z-10 rounded-b-none h-8"
      >
        {name}
      </TabsTrigger>
    );
  });

  return (
    <Tabs defaultValue={tabs[+defaultTab].key!}>
      <TabsList className="bg-backgroun px-0 h-8">{tabs}</TabsList>
      {languages.map((_, index) => (
        <TabsContent
          className="flex hidden:hidden flex-row w-full justify-center -mt-px"
          key={tabs[index].key + "-content"}
          value={tabs[index].key!}
          tabIndex={-1}
        >
          {children![index]}
        </TabsContent>
      ))}
    </Tabs>
  );
}

type CodeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export function Code({ children, className }: CodeProps) {
  return (
    <code
      className={cn(
        "bg-code text-code-foreground px-1 py-0.5 rounded-md",
        className,
      )}
    >
      {children}
    </code>
  );
}
