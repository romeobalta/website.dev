import { Metadata } from 'next'
import { BlogPosting, WithContext } from 'schema-dts'

import {
  ArticleCategory,
  ArticleDesc,
  ArticleInfo,
  H1,
  MarkdownRenderer,
} from '@/components/server'
import { ArticleImage } from '@/components/server/article-image'
import { getArticle } from '@/data/getArticle'
import { getArticlesPaths } from '@/data/getArticlePaths'
import { calculateReadingTime } from '@/lib/article-functions'
import { getLinkOnServer } from '@/lib/url-functions'

export const dynamic = 'force-static'
export const dynamicParams = false

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = params

  // fetch data
  const { data } = await getArticle(slug)
  const author = data?.author?.replace('_', ' ') ?? ''

  return {
    title: `${process.env.SITE_TAG}: ${data?.title ?? ''}`,
    description: data?.description ?? '',
    metadataBase: new URL(`https://${process.env.SITE_TAG}`),
    alternates: {
      canonical: `/article/${slug}`,
    },
    openGraph: {
      type: 'article',
      publishedTime: data?.publishedAt ?? '',
      authors: author ? [author] : undefined,
      title: data?.title ?? '',
      description: data?.description ?? '',
      siteName: process.env.SITE_TAG,
      images: [
        {
          url: data?.cover?.image?.data?.attributes?.url ?? '',
          alt: data?.cover?.image?.data?.attributes?.alternativeText ?? '',
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  const { data } = await getArticlesPaths()

  return data
    ?.filter(article => !!article.attributes?.slug)
    .map(article => ({
      slug: article?.attributes?.slug ?? '',
    }))
}

export interface ArticleProps {
  params: {
    slug: string
  }
}

export default async function ArticlePage({ params: { slug } }: ArticleProps) {
  const { data, error } = await getArticle(slug)

  if (error) throw new Error('Oops, romeo is not home')

  const contentText =
    data?.content?.map(content => content?.paragraph).join('\n') ?? ''
  const readingTime = calculateReadingTime(contentText)
  const author = data?.author?.replace('_', ' ') ?? ''
  const coverImage = getLinkOnServer(data?.cover?.image?.data?.attributes?.url)

  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data?.title ?? '',
    image: coverImage ?? '',
    author: {
      '@type': 'Person',
      name: author,
      url: `https://${process.env.SITE_TAG}`,
    },
    publisher: {
      '@type': 'Person',
      name: author,
      url: `https://${process.env.SITE_TAG}`,
    },
    datePublished: data?.publishedAt,
    dateCreated: data?.publishedAt,
    articleBody: data?.description ?? '',
    url: `https://${process.env.SITE_TAG}/article/${slug}`,
    dateModified: data?.updatedAt,
  }

  return (
    <main className="w-full max-w-2xl p-5">
      <article className="flex-1 flex flex-col items-center w-full h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <ArticleCategory
          name={data?.category?.data?.attributes?.name}
          slug={data?.category?.data?.attributes?.slug}
        />
        <H1 className="mt-3 mb-2.5">{data?.title}</H1>
        <ArticleDesc className="mb-3">{data?.description}</ArticleDesc>

        <ArticleInfo
          author={author}
          date={new Date(data?.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
          })}
          readingTime={`${readingTime} min`}
        />

        {/* <ArticleImage
          src={coverImage}
          description={data?.cover?.image?.data?.attributes?.caption}
          variant={data?.cover?.type}
          alt={data?.cover?.image?.data?.attributes?.alternativeText}
        />*/}

        {data?.content?.map((content, contentKey) => (
          <>
            <MarkdownRenderer key={contentKey} markdown={content?.paragraph} />

            {content?.image?.map(async (image, imageKey) => {
              return (
                <ArticleImage
                  key={`${contentKey}-${imageKey}`}
                  src={getLinkOnServer(image?.image?.data?.attributes?.url)}
                  description={image?.image?.data?.attributes?.caption}
                  variant={image?.type}
                  alt={image?.image?.data?.attributes?.alternativeText}
                />
              )
            })}
          </>
        ))}
      </article>
    </main>
  )
}
