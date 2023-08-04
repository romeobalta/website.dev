import { getArticlesPaths } from '@/data/getArticlePaths'

export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateStaticParams() {
  const { data } = await getArticlesPaths()

  console.log(
    data
      ?.filter(article => !!article.attributes?.slug)
      .map(article => ({
        slug: article?.attributes?.slug ?? '',
      }))
  )

  return data
    ?.filter(article => !!article.attributes?.slug)
    .map(article => ({
      slug: article?.attributes?.slug ?? '',
    }))
}

export interface ArticleProps {
  params: {
    slug: string
  }
}

export default async function ArticlePage({ params: { slug } }: ArticleProps) {
  return <div>Article</div>
}
