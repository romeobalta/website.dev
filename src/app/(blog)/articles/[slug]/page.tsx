import { Metadata } from 'next'
import { Blog, WithContext } from 'schema-dts'

import { ArticleList } from '@/components/server/article-list'
import { getArticles } from '@/data/getArticles'
import { getCategories } from '@/data/getCategories'

export const dynamic = 'force-static'
export const dynamicParams = false

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const { data } = await getCategories()

  const category = data?.find(category => category.attributes?.slug === slug)

  return {
    title: `romeo.dev: ${category?.attributes?.name ?? ''}`,
    description: 'A collection of articles written by Romeo',
    metadataBase: new URL(`https://${process.env.SITE_TAG}`),
    alternates: {
      canonical: `/articles/${slug}`,
    },
    openGraph: {
      type: 'website',
      title: `${slug} - romeo.dev`,
      description: 'A collection of articles written by Romeo',
      siteName: process.env.SITE_TAG,
    },
  }
}

export async function generateStaticParams() {
  const { data } = await getCategories()

  return data
    ?.filter(category => !!category.attributes?.slug)
    .map(category => ({
      slug: category?.attributes?.slug ?? '',
    }))
}

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
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
