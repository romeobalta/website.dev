'use client'

import React from 'react'

import { ArticleBox, Search } from '@/components'
import { getArticles, GetArticlesResultData } from '@/data/getArticles'
import { ARTICLES_PER_PAGE } from '@/lib/constants'
import { getLinkOnServer } from '@/lib/url-functions'

interface CategoryPageProps {
  searchParams: {
    category: string
  }
}

export default function CategoryPage({ searchParams }: CategoryPageProps) {
  const [page, setPage] = React.useState(1)
  const [nextPage, setNextPage] = React.useState(0)

  const [articles, setArticles] = React.useState<GetArticlesResultData>(null)

  React.useEffect(() => {
    const fetchArticles = async () => {
      const { data, pagination, error, loading } = await getArticles({
        pagination: {
          start: page - 1 * ARTICLES_PER_PAGE,
          limit: ARTICLES_PER_PAGE,
        },
      })

      if (error || loading || !data) {
        return
      }

      setArticles(data)
      setNextPage(pagination?.page !== pagination?.pageCount ? page + 1 : 0)

      console.log(data)
    }

    fetchArticles()
  }, [page, searchParams, setArticles])

  return (
    <>
      <Search searchParams={searchParams} />

      <main className="w-full max-w-6xl flex-1 grid grid-cols-1 @2xl:grid-cols-2 @5xl:grid-cols-4 gap-x-4 gap-y-8 @5xl:gap-y-8 mt-4 px-5">
        {articles?.map(article => (
          <ArticleBox
            key={article.id}
            title={article.attributes?.Title ?? ''}
            description={article.attributes?.Description ?? ''}
            category={article.attributes?.Category?.data?.attributes?.Name}
            date={article.attributes?.createdAt}
            link={`/article/${article.attributes?.slug}`}
            image={getLinkOnServer(
              article.attributes?.Thumbnail?.data?.attributes?.url
            )}
          />
        ))}
      </main>
    </>
  )
}
