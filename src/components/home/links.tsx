export function Links({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="w-full max-w-md my-8 text-2xl font-bold text-center font-source-serif">
        Links
      </h1>
      <div className="w-full max-w-md font-roboto font-normal text-sm">
        {children}
      </div>
    </>
  );
}
