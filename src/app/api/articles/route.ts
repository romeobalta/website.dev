import { NextRequest, NextResponse } from 'next/server'

import { getArticles } from '@/data/getArticles'

interface Context {
  params?: {
    category: string | null
    year: string | null
    term: string | null

    pagination?: {
      start?: number
      limit?: number
    }
  }
}

export async function GET(request: NextRequest, { params }: Context) {
  const { category, year, term, pagination } = params ?? {}

  const articles = await getArticles({ category, year, term, pagination })
  return NextResponse.json(articles)
}
