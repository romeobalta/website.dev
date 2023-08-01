import React, { Suspense } from 'react'

import { ArticleBox } from '@/components'
import { useArticleSearch } from '@/hooks/useArticleSearch'
import { getLinkOnServer } from '@/lib/url-functions'

export function ArticleList() {
  const { articles, hasNextPage, goToNextPage } = useArticleSearch()

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
    <main className="w-full max-w-6xl flex-1 grid grid-cols-1 @2xl:grid-cols-2 @5xl:grid-cols-4 gap-x-4 gap-y-8 @5xl:gap-y-8 mt-4 px-5 pb-10">
      <Suspense fallback={<div>Loading...</div>}>
        {articles?.map(article => (
          <ArticleBox
            key={article.id}
            title={article.attributes?.title ?? ''}
            description={article.attributes?.description ?? ''}
            category={article.attributes?.category?.data?.attributes?.name}
            date={article.attributes?.createdAt}
            link={`/article/${article.attributes?.slug}`}
            image={getLinkOnServer(
              article.attributes?.thumbnail?.data?.attributes?.url
            )}
          />
        ))}
      </Suspense>
    </main>
  )
}
