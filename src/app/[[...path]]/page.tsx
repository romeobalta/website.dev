import { MDXRenderer } from "@/components/mdx-renderer";
import { d } from "@/debug";
import { router } from "@/router";
import WithLayout, { Layouts } from "@/with-layout";
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
  const pathname = "/" + path.join("/");

  const { content, filename } = await router.getFile(pathname);

  const categoriesPaths = await router.getCategoriesPaths();
  d({ categoriesPaths: [...categoriesPaths], pathname });
  const categoryLayout = categoriesPaths.get(pathname) as Layouts;
  if (categoryLayout) {
    return <WithLayout layout={categoryLayout} />;
  }

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
