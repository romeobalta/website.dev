import { SITE_TAG } from "@/config";
import { cn } from "@/util";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { ThemeToggle } from "../common/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

type BlogHeaderProps = {
  border?: boolean;
};

export function BlogHeader({ border }: BlogHeaderProps) {
  return (
    <div className="w-full">
      <header
        className={cn("w-full py-3 flex flex-row justify-between items-center")}
      >
        <Link href="/">
          <h1 className="text-3xl inline-block">{SITE_TAG}</h1>
        </Link>
        <div className="flex flex-row h-5 space-x-4 items-center font-extrabold text-base">
          <div className="sm:flex flex-row h-5 space-x-4 items-center hidden">
            <Link href="/">About</Link>
            <Separator orientation="vertical" />
            <Link href="/category/all">Articles</Link>
          </div>
          <NavigationDropdown className="block sm:hidden" />
          <Separator orientation="vertical" />
          <ThemeToggle />
        </div>
      </header>
      {border && <Separator />}
    </div>
  );
}

//
const NavigationDropdown = ({ className }: { className: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button variant="link" size="icon">
          <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href="/">About</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/category/all">Articles</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
