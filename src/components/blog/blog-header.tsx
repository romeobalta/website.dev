import { SITE_TAG } from "@/config";
import { cn } from "@/util";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { ThemeToggle } from "../common/theme-toggle";

type BlogHeaderProps = {
  border?: boolean;
};

export function BlogHeader({ border }: BlogHeaderProps) {
  return (
    <div className="w-full">
      <header
        className={cn(
          "w-full font-jetbrains-mono py-3 flex flex-row justify-between items-center",
        )}
      >
        <Link href="/">
          <h1 className="font-jetbrains-mono text-3xl inline-block">
            {SITE_TAG}
          </h1>
        </Link>
        <div className="flex flex-row h-5 space-x-4 items-center font-jetbrains-mono font-extrabold text-base">
          <Link href="/">About</Link>
          <Separator orientation="vertical" />
          <Link href="/category/all">Articles</Link>
          <Separator orientation="vertical" />
          <ThemeToggle />
        </div>
      </header>
      {border && <Separator />}
    </div>
  );
}
