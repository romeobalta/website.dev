import { MDXRenderer } from "@/components/mdx-renderer";
import WithLayout, { Layouts } from "@/components/with-layout";
import { p } from "@/debug";
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
  const { path = [] } = params;
  const pathname = "/" + path.join("/");

  // Check if the path is a category, as those are generated dynamically
  const categoriesPaths = await router.getCategoriesPaths();
  const categoryLayout = categoriesPaths.get(pathname) as Layouts;
  if (categoryLayout) {
    const category = path[path.length - 1] ?? null;

    return (
      <WithLayout
        layout={categoryLayout}
        metadata={{
          category,
        }}
      />
    );
  }

  // Check if the path exists as a MDX file
  const { content, filename } = await router.getFile(pathname);
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
