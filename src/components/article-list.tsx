import React from 'react'

import { ArticleBox } from '@/components'
import { GetArticlesResultData } from '@/data/getArticles'

interface ArticleListProps {
  articles: GetArticlesResultData
}

export function ArticleList({ articles }: ArticleListProps) {
  let currentDate: Date | null = null

  return (
    <main className="w-full grid grid-cols-1 gap-x-4 gap-y-4 mt-4">
      {articles?.length === 0 && (
        <div className="w-full text-center col-span-2">
          <h1 className="text-2xl font-bold font-source-serif mt-10">
            No articles here at the moment
          </h1>
        </div>
      )}
      {articles?.map(article => {
        const date = new Date(article.attributes?.publishedAt)
        let header = null

        // if different month, show month and year
        if (!currentDate || currentDate.getMonth() !== date.getMonth()) {
          currentDate = date
          header = (
            <h1 className="text-2xl font-bold font-source-serif mt-10 first:mt-0">
              {date.toLocaleString('default', {
                month: 'long',
                year: 'numeric',
              })}
            </h1>
          )
        }

        return (
          <>
            {header}
            <ArticleBox
              key={article.attributes?.slug}
              title={article.attributes?.title ?? ''}
              description={article.attributes?.description ?? ''}
              category={article.attributes?.category?.data?.attributes?.name}
              date={article.attributes?.publishedAt}
              link={`/article/${article.attributes?.slug}`}
            />
          </>
        )
      })}
    </main>
  )
}
