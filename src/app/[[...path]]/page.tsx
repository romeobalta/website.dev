import { MDXRenderer } from "@/components/mdx-renderer";
import WithLayout, { Layouts } from "@/components/with-layout";
import {
  SITE_DESCRIPTION,
  SITE_IMAGE,
  SITE_IMAGE_ALT,
  SITE_TAG,
  SITE_URL,
} from "@/config";
import { router } from "@/router";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamicParams = false;
export const dynamic = "force-static";
export const revalidate = 300;

type PageProps = {
  params: {
    path: string[];
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { path = [] } = params;
  const pathname = "/" + path.join("/");
  const metadata = await router.getMetadata(pathname);

  let title = metadata.title ? `${SITE_TAG}: ${metadata.title}` : SITE_TAG;

  const categoriesPaths = router.getCategoriesPaths();
  const categoryLayout = categoriesPaths.get(pathname);
  if (categoryLayout) {
    const category = path[path.length - 1] ?? null;
    title = `${SITE_TAG}: ${category}`;
  }

  return {
    title,
    description: SITE_DESCRIPTION,
    robots: { index: true, follow: true },
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `${SITE_URL}${pathname}`,
    },
    twitter: {
      card: "summary",
      images: {
        url: SITE_IMAGE,
        alt: SITE_IMAGE_ALT,
      },
    },
    openGraph: {
      type: "website",
      title: title,
      description: SITE_DESCRIPTION,
      siteName: SITE_TAG,
      images: SITE_IMAGE,
    },
  };
}

export async function generateStaticParams() {
  const paths = [
    ...[...router.getArticlesPaths()].map((path) => ({
      path: path.split("/").filter(Boolean),
    })),
    ...[...router.getCategoriesPaths().keys()].map((path) => ({
      path: path.split("/").filter(Boolean),
    })),
  ];

  return paths;
}

export default async function generatePage({ params }: PageProps) {
  const { path = [] } = params;
  const pathname = "/" + path.join("/");

  const site = router.getSite();

  // Check if the path is a category, as those are generated dynamically
  const categoriesPaths = router.getCategoriesPaths();
  const categoryLayout = categoriesPaths.get(pathname) as Layouts;
  if (categoryLayout) {
    const category = path[path.length - 1] ?? null;

    return (
      <WithLayout
        layout={categoryLayout}
        metadata={{
          category,
          url: pathname,
          site,
        }}
      />
    );
  }

  // Check if the path exists as a MDX file
  const { content, filename } = await router.getFile(pathname);
  if (content.length && filename?.length) {
    const { MDXContent, metadata } = await router.getContent(content, filename);

    return (
      <WithLayout
        layout={metadata.layout}
        metadata={{ ...metadata, site, url: pathname }}
      >
        <MDXRenderer Component={MDXContent} />
      </WithLayout>
    );
  }

  return notFound();
}
