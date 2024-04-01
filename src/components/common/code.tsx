import { isValidElement } from "react";

type CodeBoxProps = {
  className?: string;
  showCopyButton?: string;
  children?: React.ReactNode;
};

export function Code({ children }: CodeBoxProps) {
  // const matches = className?.match(/language-(?<language>.*)/);
  // const language = matches?.groups?.language ?? "";

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
    <div className="my-4 flex flex-row justify-center w-full">
      <div className="border max-w-full md:min-w-max flex-1 overflow-x-scroll md:overflow-x-visible">
        <pre className="p-4 bg-[#0d1117]" tabIndex={0}>
          {content}
        </pre>
      </div>
    </div>
  );
}
