import { gql } from 'apollo-boost'

import client from '@/apollo-client'
import { ArticleFiltersInput, ArticlesQuery, Maybe } from '@/gql/graphql'

const ARTICLES_QUERY = gql`
  query Articles($filters: ArticleFiltersInput) {
    articles(sort: "id:desc", filters: $filters, pagination: { limit: 9999 }) {
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
}

export type GetArticlesResultData = Extract<
  ArticlesQuery['articles'],
  { __typename?: 'ArticleEntityResponseCollection' }
>['data']

export async function getArticles(filter?: GetArticlesFilter) {
  const filters: ArticleFiltersInput = {}

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
    },
  })
  return {
    data: data?.articles?.data,
  }
}
