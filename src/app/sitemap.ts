import { MetadataRoute } from 'next'

import { getArticlesPaths } from '@/data/getArticlePaths'
import { getCategories } from '@/data/getCategories'
import { getHome } from '@/data/getHome'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: home } = await getHome()
  const articleRoutes = (await getArticlesPaths()).data
    .filter(article => !!article.slug && !!article.updatedAt)
    .map(article => ({
      url: `${home?.siteUrl}/article/${article.slug}`,
      lastModified: article.updatedAt,
    }))

  const categoryRoutes = (await getCategories()).data
    .filter(category => !!category.slug && !!category.createdAt)
    .map(category => ({
      url: `${home?.siteUrl}/articles/${category.slug}`,
      lastModified: category.updatedAt,
    }))

  return [
    {
      url: home?.siteUrl || '',
      lastModified: home?.updatedAt,
    },
    {
      url: `${home?.siteUrl}/articles`,
      lastModified: categoryRoutes[0]?.lastModified,
    },
    ...categoryRoutes,
    ...articleRoutes,
  ]
}
