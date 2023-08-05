import React from 'react'

import { GetArticlesResultData } from '@/data/getArticles'

import { ArticleBox } from './article-box'

interface ArticleListProps {
  articles: GetArticlesResultData
  showCategories?: boolean
}

export function ArticleList({
  articles,
  showCategories = false,
}: ArticleListProps) {
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
      {articles?.map((article, i) => {
        const date = new Date(article.attributes?.publishedAt)
        let header = null

        // if different month, show month and year
        if (!currentDate || currentDate.getMonth() !== date.getMonth()) {
          currentDate = date
          const dateValue = date.toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })
          header = (
            <h1 className="text-2xl font-bold font-roboto-condensed mt-8 mb-3 first:mt-0">
              {dateValue}
            </h1>
          )
        }

        return (
          <React.Fragment key={i}>
            {header}
            <ArticleBox
              key={article.attributes?.slug}
              title={article.attributes?.title ?? ''}
              description={article.attributes?.description ?? ''}
              category={
                showCategories
                  ? article.attributes?.category?.data?.attributes?.name
                  : null
              }
              date={article.attributes?.publishedAt}
              link={`/article/${article.attributes?.slug}`}
            />
          </React.Fragment>
        )
      })}
    </main>
  )
}
