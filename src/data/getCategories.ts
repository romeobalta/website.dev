import { gql } from 'apollo-boost'

import client from '@/apollo-client'
import { CategoriesQuery } from '@/gql/graphql'

const CATEGORIES_QUERY = gql`
  query Categories {
    categories(orderBy: updatedAt_DESC) {
      id
      title
      slug
      createdAt
      updatedAt
    }
  }
`

export type GetCategoriesResultData = Extract<
  CategoriesQuery['categories'],
  { __typename?: 'CategoryEntityResponseCollection' }
>['data']

export async function getCategories() {
  const { data } = await client.query<CategoriesQuery>({
    query: CATEGORIES_QUERY,
  })

  return {
    data: data?.categories ?? [],
  }
}
