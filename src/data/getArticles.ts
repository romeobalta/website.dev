import { gql } from 'apollo-boost'

import client from '@/apollo-client'
import { ArticleFiltersInput, ArticlesQuery, Maybe } from '@/gql/graphql'

const ARTICLES_QUERY = gql`
  query Articles($pagination: PaginationArg, $filters: ArticleFiltersInput) {
    articles(
      sort: "publishedAt:desc"
      filters: $filters
      pagination: $pagination
    ) {
      data {
        id
        attributes {
          title
          description
          publishedAt
          updatedAt
          category {
            data {
              attributes {
                name
              }
            }
          }
          slug
        }
      }
    }
  }
`

export interface GetArticlesFilter {
  category?: Maybe<string>
  pagination?: {
    limit: number
  }
}

export type GetArticlesResultData = Extract<
  ArticlesQuery['articles'],
  { __typename?: 'ArticleEntityResponseCollection' }
>['data']

export async function getArticles(filter?: GetArticlesFilter) {
  const filters: ArticleFiltersInput = {}
  const pagination = {
    limit: 9999,
  }

  if (filter?.pagination?.limit) {
    pagination.limit = filter.pagination.limit
  }

  if (filter?.category) {
    filters.category = {
      slug: {
        eq: filter.category,
      },
    }
  }

  const { data } = await client.query<ArticlesQuery>({
    query: ARTICLES_QUERY,
    variables: {
      filters,
      pagination,
    },
  })
  return {
    data: data?.articles?.data,
  }
}
