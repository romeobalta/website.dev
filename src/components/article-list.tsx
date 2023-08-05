import React, { Suspense } from 'react'

import { ArticleBox } from '@/components'
import { useArticleSearch } from '@/hooks/useArticleSearch'
import { getLinkOnServer } from '@/lib/url-functions'

export function ArticleList() {
  const { articles, loading, hasNextPage, goToNextPage } = useArticleSearch()

  const handleScroll = React.useCallback(() => {
    if (
      window.scrollY >= document.body.offsetHeight - window.innerHeight &&
      hasNextPage
    ) {
      goToNextPage()
    }
  }, [goToNextPage, hasNextPage])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <main className="w-full flex-1 grid grid-cols-1 @xl:grid-cols-2 gap-x-4 gap-y-8 @5xl:gap-y-8 mt-4 pb-10">
      {articles?.length === 0 && !loading && (
        <div className="w-full text-center @2xl:col-span-2 @5xl:col-span-4">
          <h1 className="text-2xl font-bold font-source-serif mt-10">
            No articles here at the moment
          </h1>
        </div>
      )}
      {articles?.map(article => (
        <ArticleBox
          key={article.attributes?.slug}
          title={article.attributes?.title ?? ''}
          description={article.attributes?.description ?? ''}
          category={article.attributes?.category?.data?.attributes?.name}
          date={article.attributes?.publishedAt}
          link={`/article/${article.attributes?.slug}`}
          image={getLinkOnServer(
            article.attributes?.thumbnail?.data?.attributes?.url
          )}
        />
      ))}
      {loading && (
        <div className="w-full flex justify-center items-center @2xl:col-span-2 @5xl:col-span-4 my-10">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-slate-900/20"></div>
        </div>
      )}
    </main>
  )
}
