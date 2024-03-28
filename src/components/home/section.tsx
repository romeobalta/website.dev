type SectionProps = {
  title?: string;
  children: React.ReactNode;
};

export function Section({ children, title }: SectionProps) {
  return (
    <div className="section w-full mt-16">
      {title && (
        <h1 className="w-full mb-8 text-lg font-bold text-center font-roboto-condensed uppercase text-muted-foreground">
          {title}
        </h1>
      )}
      <div className="w-full font-roboto font-normal text-base">{children}</div>
    </div>
  );
}
