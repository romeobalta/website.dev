import { SITE_TAG } from "@/config";
import { cn } from "@/util";
import Link from "next/link";
import { Separator } from "../ui/separator";

// import { Socials } from './socials'

type BlogHeaderProps = {
  border?: boolean;
};

export function BlogHeader({ border }: BlogHeaderProps) {
  return (
    <div>
      <header
        className={cn(
          "w-full font-roboto py-3 flex flex-row justify-between items-center",
        )}
      >
        <Link href="/">
          <h1 className="font-source-serif text-3xl inline-block">
            {SITE_TAG}
          </h1>
        </Link>
        <div className="flex flex-row gap-2 font-roboto-condensed font-bold text-base">
          <Link href="/category/all">Articles</Link>
          {/* {false && <Socials className="ml-10" />} */}
        </div>
      </header>
      <Separator />
    </div>
  );
}
