'use client'

import { ApolloProvider } from '@apollo/react-hooks'

import client from '@/apollo-client'
import { ArticleList, Search } from '@/components'
import { ArticleSearchProvider } from '@/hooks/useArticleSearch'

interface CategoryPageProps {
  searchParams: {
    category: string
  }
}

export default function CategoryPage({ searchParams }: CategoryPageProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <ArticleSearchProvider searchParams={searchParams}>
          <Search />

          <ArticleList />
        </ArticleSearchProvider>
      </ApolloProvider>
    </>
  )
}
