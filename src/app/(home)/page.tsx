import Link from 'next/link'
import { Person, WithContext } from 'schema-dts'

import { ArticleBox, Bio, MarkdownRenderer, Socials } from '@/components/server'
import { getArticles } from '@/data/getArticles'
import { getHome } from '@/data/getHome'

export const dynamic = 'force-static'

export default async function Home() {
  const { data: home, error } = await getHome()
  const { data: articles } = await getArticles({
    pagination: {
      limit: 8,
    },
  })

  if (error) throw new Error('Oops, romeo is not home')

  const jsonLd: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: home?.name,
    url: `https://${process.env.SITE_TAG}`,
    image: home?.avatar?.data?.attributes?.url,
    sameAs: home?.socials?.map(social => social?.link ?? ''),
  }

  return (
    <div className="flex flex-col items-center w-full px-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Bio
        name={home?.name ?? ''}
        description={home?.description ?? ''}
        picture={home?.avatar?.data?.attributes?.url ?? ''}
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
        <ul className="list-disc pl-5">
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
      </div>

      {!!articles?.length && (
        <>
          <h1 className="w-full max-w-md my-5 text-lg font-bold text-center font-source-serif">
            Latest articles
          </h1>

          <div className="w-full grid grid-cols-1 gap-x-4 gap-y-8 mt-4">
            {articles?.map(article => (
              <ArticleBox
                key={article?.attributes?.slug}
                title={article?.attributes?.title ?? ''}
                description={article?.attributes?.description ?? ''}
                category={
                  article?.attributes?.category?.data?.attributes?.name ?? ''
                }
                link={`/article/${article?.attributes?.slug}`}
                date={article?.attributes?.publishedAt ?? ''}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
