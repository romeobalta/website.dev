import { MetadataRoute } from 'next'

// TODO: finish sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${process.env.SITE_NAME}`,
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.SITE_NAME}/articles`,
      lastModified: new Date(),
    },
  ]
}
