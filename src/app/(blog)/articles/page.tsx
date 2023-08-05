import { Metadata } from 'next'
import { Blog, WithContext } from 'schema-dts'

import { ArticleList } from '@/components/server'
import { getArticles } from '@/data/getArticles'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${process.env.SITE_TAG}: Articles`,
    description: 'A collection of articles written by Romeo',
    metadataBase: new URL(`https://${process.env.SITE_TAG}`),
    alternates: {
      canonical: `/articles`,
    },
    openGraph: {
      type: 'website',
      title: 'Articles - romeo.dev',
      description: 'A collection of articles written by Romeo',
      siteName: process.env.SITE_TAG,
    },
  }
}

export default async function CategoryPage() {
  // fetch data
  const { data } = await getArticles()

  const jsonLd: WithContext<Blog> = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    author: {
      '@type': 'Person',
      name: 'Romeo Balta',
      url: `https://${process.env.SITE_TAG}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleList articles={data ?? []} showCategories />
    </>
  )
}
