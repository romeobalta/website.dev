import { gql } from 'apollo-boost'

import client from '@/apollo-client'
import { ArticlesQuery, ArticleWhereInput, Maybe } from '@/gql/graphql'

const ARTICLES_QUERY = gql`
  query Articles($limit: Int, $filters: ArticleWhereInput) {
    articles(
      stage: PUBLISHED
      orderBy: publishedAt_DESC
      where: $filters
      first: $limit
    ) {
      id
      title
      description
      slug
      category {
        title
        slug
      }
      createdAt
      updatedAt
      publishedAt
    }
  }
`

export interface GetArticlesFilter {
  category?: Maybe<string>
  limit?: number
}

export async function getArticles(filter?: GetArticlesFilter) {
  const filters: ArticleWhereInput = {}
  const pagination = {
    limit: 9999,
  }

  if (filter?.limit) {
    pagination.limit = filter.limit
  }

  if (filter?.category) {
    filters.category = {
      slug: filter.category,
    }
  }

  const { data, error } = await client.query<ArticlesQuery>({
    query: ARTICLES_QUERY,
    variables: {
      filters,
      limit: pagination.limit,
    },
  })

  if (error) throw error

  return {
    data: data?.articles,
  }
}
