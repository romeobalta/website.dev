import { Metadata } from 'next'
import { Blog, WithContext } from 'schema-dts'

import { ArticleList } from '@/components/server'
import { getArticles } from '@/data/getArticles'
import { getHome } from '@/data/getHome'

export async function generateMetadata(): Promise<Metadata> {
  const { data: home } = await getHome()

  return {
    title: `${home?.siteTitle}: Articles`,
    description: `A collection of articles written by ${home?.name}`,
    metadataBase: new URL(home?.siteUrl ?? 'http://localhost:3000'),
    alternates: {
      canonical: `/articles`,
    },
    openGraph: {
      type: 'website',
      title: `Articles - ${home?.siteTitle}`,
      description: `A collection of articles written by ${home?.name}`,
      siteName: home?.siteTitle,
      images: [
        {
          url: home?.openGraphImage?.url,
          secureUrl: home?.openGraphImage?.secure_url,
          width: home?.openGraphImage?.width,
          height: home?.openGraphImage?.height,
          alt: home?.openGraphImage?.context.custom?.alt,
        },
      ],
    },
  }
}

export default async function CategoryPage() {
  const { data: home } = await getHome()
  const { data } = await getArticles()

  const jsonLd: WithContext<Blog> = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    author: {
      '@type': 'Person',
      name: 'Romeo Balta',
      url: home?.siteUrl ?? '',
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
