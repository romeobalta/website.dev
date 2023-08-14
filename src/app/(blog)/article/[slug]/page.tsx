import { Metadata } from 'next'
import { BlogPosting, WithContext } from 'schema-dts'

import { ArticleCategory, H1, MarkdownRenderer } from '@/components/server'
import { getArticle } from '@/data/getArticle'
import { getArticlesPaths } from '@/data/getArticlePaths'
import { getHome } from '@/data/getHome'
import { calculateReadingTime } from '@/lib/article-functions'

export const dynamic = 'force-static'
export const dynamicParams = false

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: home } = await getHome()
  const { slug } = params

  const { data } = await getArticle(slug)
  const author = home?.name ?? ''

  return {
    title: `${home?.siteTitle}: ${data?.title}`,
    description: data?.description ?? '',
    metadataBase: new URL(home?.siteUrl ?? 'http://localhost:3000'),
    alternates: {
      canonical: `/article/${slug}`,
    },
    openGraph: {
      type: 'article',
      publishedTime: data?.publishedAt ?? '',
      authors: author ? [author] : undefined,
      title: data?.title ?? '',
      description: data?.description ?? '',
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
  const { data } = await getArticlesPaths()

  return data
    ?.filter(article => !!article.slug)
    .map(article => ({
      slug: article?.slug ?? '',
    }))
}

export interface ArticleProps {
  params: {
    slug: string
  }
}

export default async function ArticlePage({ params: { slug } }: ArticleProps) {
  const { data: home } = await getHome()
  const { data, error } = await getArticle(slug)

  if (error) throw new Error('Oops, romeo is not home')

  const contentText = data?.content ?? ''
  const readingTime = calculateReadingTime(contentText)
  const author = home?.name
  // const coverImage = getLinkOnServer(data?.cover?.image?.data?.url)

  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data?.title,
    image: home?.openGraphImage?.secure_url,
    author: {
      '@type': 'Person',
      name: author,
      url: home?.siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: author,
      url: home?.siteUrl,
    },
    datePublished: data?.publishedAt,
    dateCreated: data?.createdAt,
    dateModified: data?.updatedAt,
    articleBody: data?.content,
    url: `${home?.siteUrl}/article/${slug}`,
  }

  return (
    <main className="w-full py-5">
      <article className="flex-1 flex flex-col items-center w-full h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <H1 className="mt-6 mb-6 text-center">{data?.title}</H1>

        <ArticleCategory
          className="mb-8 text-neutral-400"
          name={data?.category?.title}
          slug={data?.category?.slug}
          date={new Date(data?.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
          })}
          readingTime={`${readingTime} min`}
        />
        {/*<ArticleDesc>{data?.description}</ArticleDesc>*/}

        {/*<ArticleInfo
            className="mt-3"
            author={author}
            date={new Date(data?.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            })}
            readingTime={`${readingTime} min`}
          />*/}
        {/* <ArticleImage
          src={coverImage}
          description={data?.cover?.image?.data?.caption}
          variant={data?.cover?.type}
          alt={data?.cover?.image?.data?.alternativeText}
        />*/}

        <div className="w-full text-base leading-7 font-roboto">
          <MarkdownRenderer markdown={data?.content} />
          {/*data?.content?.map((content, contentKey) => (
            <>
              <MarkdownRenderer
                key={contentKey}
                markdown={content?.paragraph}
              />

              {content?.image?.map(async (image, imageKey) => {
                return (
                  <ArticleImage
                    key={`${contentKey}-${imageKey}`}
                    src={getLinkOnServer(image?.image?.data?.url)}
                    description={image?.image?.data?.caption}
                    variant={image?.type}
                    alt={image?.image?.data?.alternativeText}
                  />
                )
              })}
            </>
          ))*/}
        </div>
      </article>
    </main>
  )
}
