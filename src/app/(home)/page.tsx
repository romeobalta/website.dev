import { Metadata } from 'next'
import Link from 'next/link'
import { Person, WithContext } from 'schema-dts'

import { ArticleBox, Bio, MarkdownRenderer, Socials } from '@/components/server'
import { getArticles } from '@/data/getArticles'
import { getHome } from '@/data/getHome'

export const dynamic = 'force-static'

export async function generateMetadata(): Promise<Metadata> {
  const { data: home } = await getHome()

  return {
    title: home?.siteTitle,
    description: home?.siteDescription,
    metadataBase: new URL(home?.siteUrl ?? 'http://localhost:3000'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      title: home?.siteTitle,
      description: home?.siteDescription,
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

export default async function Home() {
  const { data: home } = await getHome()
  const { data: articles } = await getArticles({
    limit: 5,
  })

  const jsonLd: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: home?.name ?? '',
    url: `https://${process.env.SITE_TAG}`,
    image: home?.avatar?.data?.url,
    sameAs: home?.socials?.map(social => social?.url ?? ''),
  }

  return (
    <div className="flex flex-col items-center w-full px-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Bio
        name={home?.name}
        description={home?.description}
        picture={home?.avatar}
      />

      <Socials socials={home?.socials} className="mt-2" />

      <h1 className="w-full max-w-md my-5 text-lg font-bold text-center font-source-serif">
        About me
      </h1>
      <div className="w-full max-w-md font-roboto font-normal text-sm">
        <MarkdownRenderer markdown={home?.bio} />
      </div>

      <h1 className="w-full max-w-md my-5 text-lg font-bold text-center font-source-serif">
        Links
      </h1>
      <div className="w-full max-w-md font-roboto font-normal text-sm">
        <MarkdownRenderer markdown={home?.links} />
        {/*        <ul className="list-disc pl-5">
          {home?.links?.map(link => {
            const { url, title, description } = {
              url: '',
              title: '',
              ...link,
            }
            return (
              <li key={url} className="my-1">
                <Link
                  href={url}
                  className="text-sky-500"
                  title={description ?? ''}
                >
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
*/}
      </div>

      {!!articles?.length && (
        <>
          <h1 className="w-full max-w-md my-5 text-lg font-bold text-center font-source-serif">
            Latest articles
          </h1>

          <div className="w-full grid grid-cols-1 gap-x-4 gap-y-8 mt-4">
            {articles?.map(article => (
              <ArticleBox
                key={article?.slug}
                title={article?.title}
                description={article?.description}
                category={article?.category?.title}
                link={`/article/${article?.slug}`}
                date={article?.publishedAt}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
