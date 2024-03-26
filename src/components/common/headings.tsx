interface HeadingProps {
  className?: string;
  children: React.ReactNode;
}

export function H1({ children }: HeadingProps) {
  return (
    <h1 className="font-source-serif font-black text-[8cqw] leading-[11cqw] my-5 w-full max-w-2xl">
      {children}
    </h1>
  );
}

export function H2({ children }: HeadingProps) {
  return (
    <h2 className="font-source-serif font-[900] text-[7.5cqw] leading-[10cqw] my-5 w-full max-w-2xl">
      {children}
    </h2>
  );
}

export function H3({ children }: HeadingProps) {
  return (
    <h3 className="font-source-serif font-[900] text-[7cqw] leading-[9cqw] my-5 w-full max-w-2xl">
      {children}
    </h3>
  );
}

export function H4({ children }: HeadingProps) {
  return (
    <h4 className="font-source-serif font-[900] text-[6.5cqw] leading-[6.5cqw] my-5 w-full max-w-2xl">
      {children}
    </h4>
  );
}

export function H5({ children }: HeadingProps) {
  return (
    <h5 className="font-source-serif font-[900] text-[6cqw] leading-[6cqw] my-5 w-full max-w-2xl">
      {children}
    </h5>
  );
}

export function H6({ children }: HeadingProps) {
  return (
    <h6 className="font-source-serif font-[900] text-[5.5cqw] leading-[5.5cqw] my-5 w-full max-w-2xl">
      {children}
    </h6>
  );
}
