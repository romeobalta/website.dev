import { gql } from 'apollo-boost'

import client from '@/apollo-client'
import { ArticlePathsQuery } from '@/gql/graphql'

const ARTICLES_QUERY = gql`
  query ArticlePaths {
    articles(first: 99999, orderBy: updatedAt_DESC) {
      id
      slug
      updatedAt
    }
  }
`

export type GetArticlesResultData = Extract<
  ArticlePathsQuery['articles'],
  { __typename?: 'ArticleEntityResponseCollection' }
>['data']

export async function getArticlesPaths() {
  const { data } = await client.query<ArticlePathsQuery>({
    query: ARTICLES_QUERY,
  })
  return {
    data: data?.articles ?? [],
  }
}
