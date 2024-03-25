export function AboutMe({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="w-full max-w-md my-8 text-2xl font-bold text-center font-source-serif">
        About me
      </h1>
      <div className="w-full max-w-md font-roboto font-normal text-sm">
        {children}
      </div>
    </>
  );
}
