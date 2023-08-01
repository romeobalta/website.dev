import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { ArticleFiltersInput, ArticlesQuery, Maybe } from '@/gql/graphql'

const ArticlesDocument = gql`
  query Articles($pagination: PaginationArg, $filters: ArticleFiltersInput) {
    articles(pagination: $pagination, sort: "id:asc", filters: $filters) {
      data {
        id
        attributes {
          title
          thumbnail {
            data {
              attributes {
                url
                alternativeText
                caption
              }
            }
          }
          description
          category {
            data {
              attributes {
                name
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
  category: Maybe<string>
  year: Maybe<string>

  pagination?: {
    start?: number
    limit?: number
  }
}

export type GetArticlesResultData = Extract<
  ArticlesQuery['articles'],
  { __typename?: 'ArticleEntityResponseCollection' }
>['data']

export function useArticles(filter?: GetArticlesFilter) {
  const pagination = {
    start: 0,
    limit: 10,
    ...filter?.pagination,
  }

  const filters: ArticleFiltersInput = {}

  if (filter?.category) {
    filters.category = {
      slug: {
        eq: filter.category,
      },
    }
  }

  if (filter?.year) {
    filters.createdAt = {
      gte: `${filter.year}-01-01T00:00:00.000Z`,
      lte: `${filter.year}-12-31T23:59:59.999Z`,
    }
  }

  const { data, loading, error } = useQuery<ArticlesQuery>(ArticlesDocument, {
    variables: {
      pagination,
      filters,
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
