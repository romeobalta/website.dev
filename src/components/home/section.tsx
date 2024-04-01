type SectionProps = {
  heading: string;
  children: React.ReactNode;
};

export function Section({ children, heading }: SectionProps) {
  return (
    <>
      <h1 className="w-full max-w-md my-8 text-lg font-bold text-center font-roboto-condensed uppercase">
        {heading}
      </h1>
      <div className="w-full max-w-md font-roboto font-normal text-base">
        {children}
      </div>
    </>
  );
}
