import { gql } from 'apollo-boost'

import client from '@/apollo-client'
import { ArticleQuery } from '@/gql/graphql'

const ARTICLE_QUERY = gql`
  query Article($slug: String!) {
    article(where: { slug: $slug }) {
      id
      title
      description
      publishedAt
      createdAt
      updatedAt
      category {
        title
        slug
      }
      content
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
    data: data?.article,
    loading,
    error,
  }
}
