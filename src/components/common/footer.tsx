"use client";

import { SITE_TAG } from "@/config";
import { Separator } from "../ui/separator";
import { A } from "../ui/a";

export function Footer() {
  return (
    <div className="flex-col px-5 py-10">
      <Separator />
      <div className="w-full flex h-5 mt-5 items-center justify-center space-x-4 text-sm">
        <div>
          &copy; {new Date().getFullYear()} {SITE_TAG}
        </div>
        <Separator orientation="vertical" />
        <div>
          built using{" "}
          <A href="https://github.com/romeobalta/website.dev">website.dev</A>
        </div>
      </div>
    </div>
  );
}
