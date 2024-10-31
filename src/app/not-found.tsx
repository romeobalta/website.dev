import { BlogHeader } from "@/components/blog/blog-header";
import type { Metadata } from "next";
import { H2 } from "@/components/ui/headings";
import { P } from "@/components/ui/p";
import { A } from "@/components/ui/a";
import { Footer } from "@/components/common/footer";
import { SITE_TAG } from "@/config";

export const metadata: Metadata = {
  title: `${SITE_TAG}: Page not found`,
  description: "Page not found",
};
export default function NotFound() {
  return (
    <div className="w-full h-full max-w-2xl flex flex-col flex-1 px-5">
      <BlogHeader border />
      <div className="h-full w-full flex flex-col flex-1 justify-stretch items-center">
        <div className="flex flex-col max-w-md justify-center items-center h-full w-full px-5 @container">
          <h1 className="text-[40vw] leading-[52vw] @sm:text-[15rem] @sm:leading-[15rem] font-jetbrains-mono font-black text-muted-foreground">
            404
          </h1>
          <H2 className="my-0 ">Oopsie, page not found.</H2>
          <P>
            You might find something more interesting by going back{" "}
            <A href="/articles">to the articles</A>
          </P>
        </div>
      </div>
      <Footer />
    </div>
  );
}
