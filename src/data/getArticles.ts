import { gql } from 'apollo-boost'

import client from '@/apollo-client'
import { ArticlesQuery } from '@/gql/graphql'

const ArticlesDocument = gql`
  query Articles($start: Int, $limit: Int) {
    articles(pagination: { start: $start, limit: $limit }, sort: "id:asc") {
      data {
        id
        attributes {
          Title
          Thumbnail {
            data {
              attributes {
                url
                alternativeText
                caption
              }
            }
          }
          Description
          Category {
            data {
              attributes {
                Name
              }
            }
          }
          slug
          createdAt
        }
      }
      meta {
        pagination {
          page
          pageCount
        }
      }
    }
  }
`

export interface GetArticlesFilter {
  category?: string

  pagination?: {
    start?: number
    limit?: number
  }
}

export type GetArticlesResultData = Extract<
  ArticlesQuery['articles'],
  { __typename?: 'ArticleEntityResponseCollection' }
>['data']

export async function getArticles(filter?: GetArticlesFilter) {
  const { start, limit } = {
    start: 0,
    limit: 10,
    ...filter?.pagination,
  }

  const { data, loading, error } = await client.query<ArticlesQuery>({
    query: ArticlesDocument,
    variables: {
      start,
      limit,
    },

    fetchPolicy: 'no-cache',
  })

  return {
    data: data?.articles?.data,
    pagination: data?.articles?.meta?.pagination,
    loading,
    error,
  }
}
