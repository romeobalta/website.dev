import { MetadataRoute } from 'next'

import { getArticlesPaths } from '@/data/getArticlePaths'
import { getCategories } from '@/data/getCategories'
import { getHome } from '@/data/getHome'

// TODO: finish sitemap
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: home } = await getHome()
  const articleRoutes = (await getArticlesPaths()).data
    .filter(
      article => !!article.attributes?.slug && !!article.attributes?.updatedAt
    )
    .map(article => ({
      url: `https://${process.env.SITE_TAG}/article/${article.attributes?.slug}`,
      lastModified: article.attributes?.updatedAt,
    }))

  const categoryRoutes = (await getCategories()).data
    .filter(
      category =>
        !!category.attributes?.slug && !!category.attributes?.createdAt
    )
    .map(category => ({
      url: `https://${process.env.SITE_TAG}/articles/${category.attributes?.slug}`,
      lastModified: category.attributes?.createdAt,
    }))

  return [
    {
      url: `https://${process.env.SITE_TAG}`,
      lastModified: home?.updatedAt,
    },
    {
      url: `https://${process.env.SITE_TAG}/articles`,
      lastModified: articleRoutes[0]?.lastModified,
    },
    ...categoryRoutes,
    ...articleRoutes,
  ]
}
