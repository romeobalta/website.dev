import Link from "next/link";

export function A({
  children,
  href,
  title,
}: {
  children?: React.ReactNode;
  href?: string;
  title?: string;
}) {
  return (
    <Link
      href={href ?? ""}
      title={title}
      className="underline underline-offset-4"
    >
      {children}
    </Link>
  );
}
