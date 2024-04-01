import { isValidElement } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

type CodeProps = {
  className?: string;
  showCopyButton?: string;
  children?: React.ReactNode;
};

export function Code({ children, className }: CodeProps) {
  const matches = className?.match(/language-(?<language>.*)/);
  const language = matches?.groups?.language ?? "";

  let content = children;

  if (isValidElement(content)) {
    const code = content.props.children as React.ReactNode[];

    if (content.type === "code" && Array.isArray(code)) {
      content = (
        <code>
          {code
            .map((line, lineIndex) => {
              if (!isValidElement(line)) {
                return line;
              }

              return (
                <span
                  key={lineIndex}
                  className="[counter-increment:line] relative min-w-0 pl-8 after:absolute after:left-0 after:top-0 after:mr-4 after:w-4.5 after:text-right after:text-base after:text-[#8B949E] after:[content:counter(line)] "
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
    <div className="border max-w-full md:min-w-max flex-1 overflow-x-scroll md:overflow-x-visible relative group">
      <span className="absolute top-1 left-4 text-muted select-none group-hover:text-muted-foreground transition-colors">
        {language}
      </span>
      <pre className="px-4 pb-2 pt-8" tabIndex={0}>
        {content}
      </pre>
    </div>
  );
}

interface CodeBlockProps {
  children: React.ReactNode;
}

export function CodeBlock({ children }: CodeBlockProps) {
  return (
    <div className="my-4 flex flex-row justify-center w-full">{children}</div>
  );
}

type CodeTabsProps = {
  children: React.ReactNode[];
  languages: string;
  displayNames: string;
  defaultTab?: string;
};

export function CodeTabs({
  children,
  languages: rawLanguages,
  displayNames: rawDisplayNames,
  defaultTab = "O",
}: CodeTabsProps) {
  const languages = rawLanguages.split("|");
  const displayNames = rawDisplayNames.split("|") ?? [];

  const tabs = languages.map((language, index) => {
    const displayName = displayNames[index] ?? language;
    const key = `${language}-${index}`;

    return (
      <TabsTrigger key={key} value={key}>
        {displayName}
      </TabsTrigger>
    );
  });

  return (
    <Tabs defaultValue={tabs[+defaultTab].key!}>
      <TabsList>{tabs}</TabsList>
      {languages.map((language, index) => (
        <TabsContent
          className="flex hidden:hidden flex-row w-full justify-center"
          key={tabs[index].key + "-content"}
          value={tabs[index].key!}
        >
          {children![index]}
        </TabsContent>
      ))}
    </Tabs>
  );
}
