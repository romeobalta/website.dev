import { MDXRenderer } from "@/components/mdx-renderer";
import { _ } from "@/debug";
import { router } from "@/router";
import WithLayout from "@/with-layout";
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
  const { path = [] } = params;
  const pathname = path.join("/");

  const { content, filename } = await router.getFile("/" + pathname);

  if (content.length && filename.length) {
    const { MDXContent, metadata } = await router.getContent(content, filename);

    return (
      <WithLayout layout={metadata.layout} metadata={metadata}>
        <MDXRenderer Component={MDXContent} />
      </WithLayout>
    );
  }

  return notFound();
}
