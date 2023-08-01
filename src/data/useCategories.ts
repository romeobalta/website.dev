import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { CategoriesQuery } from '@/gql/graphql'

const CategoriesDocument = gql`
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

export function useCategories() {
  const { data, loading, error } = useQuery<CategoriesQuery>(
    CategoriesDocument,
    {
      fetchPolicy: 'no-cache',
    }
  )

  return {
    data: data?.categories?.data,
    loading,
    error,
  }
}
