import { MetadataRoute } from 'next'

// TODO: finish sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${process.env.SITE_TAG}`,
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.SITE_TAG}/articles`,
      lastModified: new Date(),
    },
  ]
}
