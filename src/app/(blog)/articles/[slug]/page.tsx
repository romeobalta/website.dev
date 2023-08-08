import { Metadata } from 'next'
import { Blog, WithContext } from 'schema-dts'

import { ArticleList } from '@/components/server/article-list'
import { getArticles } from '@/data/getArticles'
import { getCategories } from '@/data/getCategories'
import { getHome } from '@/data/getHome'

export const dynamic = 'force-static'
export const dynamicParams = false

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: home } = await getHome()
  const { data: categories } = await getCategories()
  const { slug } = params

  const category = categories?.find(category => category.slug === slug)

  return {
    title: `${home?.siteTitle}: ${category?.title ?? ''}`,
    description: `A collection of articles written by ${home?.name}`,
    metadataBase: new URL(home?.siteUrl ?? 'http://localhost:3000'),
    alternates: {
      canonical: `/articles/${slug}`,
    },
    openGraph: {
      type: 'website',
      title: `${category?.title} - ${home?.siteTitle}`,
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

export async function generateStaticParams() {
  const { data } = await getCategories()

  return data
    ?.filter(category => !!category.slug)
    .map(category => ({
      slug: category?.slug ?? '',
    }))
}

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { data: home } = await getHome()
  const { data } = await getArticles({ category: params.slug })

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
      <ArticleList articles={data ?? []} />
    </>
  )
}
