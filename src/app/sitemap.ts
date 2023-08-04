import { MetadataRoute } from 'next'

import { getArticlesPaths } from '@/data/getArticlePaths'
import { getHome } from '@/data/getHome'

// TODO: finish sitemap
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: home } = await getHome()
  const routes = (await getArticlesPaths()).data
    .filter(
      article => !!article.attributes?.slug && !!article.attributes?.updatedAt
    )
    .map(article => ({
      url: `https://${process.env.SITE_TAG}/articles/${article.attributes?.slug}`,
      lastModified: article.attributes?.updatedAt,
    }))

  return [
    {
      url: `https://${process.env.SITE_TAG}`,
      lastModified: home?.updatedAt,
    },
    {
      url: `https://${process.env.SITE_TAG}/articles`,
      lastModified: routes[0]?.lastModified,
    },
    ...routes,
  ]
}
