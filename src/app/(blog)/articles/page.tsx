'use client'

import { ApolloProvider } from '@apollo/react-hooks'
import { Blog, WithContext } from 'schema-dts'

import client from '@/apollo-client'
import { ArticleList, Search } from '@/components'
import { ArticleSearchProvider } from '@/hooks/useArticleSearch'

interface CategoryPageProps {
  searchParams: {
    category: string
  }
}

export default function CategoryPage({ searchParams }: CategoryPageProps) {
  const jsonLd: WithContext<Blog> = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    author: {
      '@type': 'Person',
      name: 'Romeo Balta',
      url: `https://${process.env.SITE_TAG}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ApolloProvider client={client}>
        <ArticleSearchProvider searchParams={searchParams}>
          <Search />

          <ArticleList />
        </ArticleSearchProvider>
      </ApolloProvider>
    </>
  )
}
