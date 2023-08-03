import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import client from '@/apollo-client'
import { CategoriesQuery } from '@/gql/graphql'

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      data {
        id
        attributes {
          name
          slug
          createdAt
        }
      }
    }
  }
`

export type GetCategoriesResultData = Extract<
  CategoriesQuery['categories'],
  { __typename?: 'CategoryEntityResponseCollection' }
>['data']

export async function getCategories() {
  const { data, loading, error } = await client.query<CategoriesQuery>({
    query: CATEGORIES_QUERY,
  })

  return {
    data: data?.categories?.data,
    loading,
    error,
  }
}
