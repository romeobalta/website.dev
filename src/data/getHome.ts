import { gql } from 'apollo-boost'

import client from '@/apollo-client'
import { HomeQuery } from '@/gql/graphql'

const HomeDocument = gql`
  query Home($id: ID!) {
    values: home(where: { id: $id }) {
      id
      avatar
      bio
      createdAt
      description
      id
      links
      name
      publishedAt
      updatedAt
      openGraphImage
      siteTitle
      siteDescription
      siteUrl
      socials {
        icon
        url
      }
    }
  }
`

export async function getHome(id: string = 'cll28pflhq57y0blainztcumm') {
  const { data, error } = await client.query<HomeQuery>({
    query: HomeDocument,
    variables: {
      id,
    },
    fetchPolicy: 'no-cache',
  })

  console.log(data)

  if (error) throw error

  return {
    data: data?.values,
  }
}
