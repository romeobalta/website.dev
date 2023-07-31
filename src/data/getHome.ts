import { gql } from 'apollo-boost'

import client from '@/apollo-client'
import { HomeQuery } from '@/gql/graphql'

const HomeDocument = gql`
  query Home {
    home {
      data {
        attributes {
          Bio
          Description
          Name
          Socials {
            ... on ComponentSocialSocial {
              Icon
              Link
            }
          }
        }
      }
    }
  }
`

export async function getHome() {
  const { data, loading, error } = await client.query<HomeQuery>({
    query: HomeDocument,
    fetchPolicy: 'no-cache',
  })

  return {
    data: data?.home?.data?.attributes,
    loading,
    error,
  }
}
