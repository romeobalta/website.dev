import { gql } from 'apollo-boost'

import client from '@/apollo-client'
import { ArticleQuery } from '@/gql/graphql'

const ARTICLE_QUERY = gql`
  query Article($slug: String!) {
    article(slug: $slug) {
      data {
        attributes {
          title
          description
          publishedAt
          author
          cover {
            type
            image {
              data {
                attributes {
                  url
                  alternativeText
                  caption
                }
              }
            }
          }
          category {
            data {
              attributes {
                name
                slug
              }
            }
          }
          content {
            paragraph
            image {
              type
              image {
                data {
                  attributes {
                    url
                    alternativeText
                    caption
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export async function getArticle(slug: string) {
  const { data, loading, error } = await client.query<ArticleQuery>({
    query: ARTICLE_QUERY,
    variables: {
      slug,
    },
    fetchPolicy: 'no-cache',
  })

  return {
    data: data?.article?.data?.attributes,
    loading,
    error,
  }
}
