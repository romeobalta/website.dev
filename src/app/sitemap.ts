import { SITE_URL } from "@/config";
import { getArticles, getContentData, getContentFiles } from "@/content-loader";
import { MetadataRoute } from "next";

const now = new Date().toISOString();

// TODO: check this logic
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { articles: rawArticles, categories: rawCategories } =
    await getContentData(await getContentFiles());

  const articleRoutes = getArticles(rawArticles)
    .filter((article) => !!article.updatedAt)
    .map((article) => ({
      url: `${SITE_URL}/${article.url}`,
      lastModified: article.updatedAt,
    }));

  const categoryRoutes = [...rawCategories.keys()]
    .filter((category) => !!rawCategories.get(category)?.updatedAt)
    .map((category) => ({
      url: `${SITE_URL}/category/${category}`,
      lastModified: rawCategories.get(category)?.updatedAt,
    }));

  return [
    {
      url: SITE_URL || "",
      lastModified: now,
    },
    ...categoryRoutes,
    ...articleRoutes,
  ];
}
