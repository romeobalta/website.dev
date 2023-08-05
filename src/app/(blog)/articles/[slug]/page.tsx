import { Metadata } from 'next'
import { Blog, WithContext } from 'schema-dts'

import { ArticleList, Search } from '@/components'
import { getArticles } from '@/data/getArticles'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = params

  return {
    title: 'Articles - romeo.dev',
    description: 'A collection of articles written by Romeo',
    metadataBase: new URL(`https://${process.env.SITE_TAG}`),
    alternates: {
      canonical: `/articles/${slug}`,
    },
    openGraph: {
      type: 'website',
      title: 'Articles - romeo.dev',
      description: 'A collection of articles written by Romeo',
      siteName: process.env.SITE_TAG,
    },
  }
}

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  // fetch data
  const { data } = await getArticles({ category: params.slug })

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
      <ArticleList articles={data ?? []} />
    </>
  )
}
