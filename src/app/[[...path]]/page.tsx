import { MDXRenderer } from "@/components/mdx-renderer";
import { _ } from "@/debug";
import { router } from "@/router";
import { notFound } from "next/navigation";

export const dynamicParams = true;
export const dynamic = "force-static";
export const revalidate = 300;

type PageProps = {
  params: {
    path: string[];
  };
};

export default async function generatePage({ params }: PageProps) {
  const { path = ["/"] } = params;
  const pathname = path.join("/");

  const { content, filename } = await router.getFile(pathname);

  if (content.length && filename.length) {
    const { MDXContent } = await router.getContent(content, filename);

    return <MDXRenderer Component={MDXContent} />;
  }

  return notFound();
}
