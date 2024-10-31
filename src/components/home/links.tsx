export function Links({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="w-full max-w-md my-8 text-2xl font-extrabold text-center font-jetbrains-mono">
        Links
      </h1>
      <div className="w-full max-w-md font-jetbrains-mono font-medium text-sm">
        {children}
      </div>
    </>
  );
}
