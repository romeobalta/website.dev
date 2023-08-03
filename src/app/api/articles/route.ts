import { NextRequest, NextResponse } from 'next/server'

import { getArticles } from '@/data/getArticles'

interface Params {
  category: string | null
  year: string | null
  term: string | null

  pagination: {
    start?: number
    limit?: number
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const params: Partial<Params> = {}

  if (searchParams.has('category')) {
    params.category = searchParams.get('category')
  }

  if (searchParams.has('year')) {
    params.year = searchParams.get('year')
  }

  if (searchParams.has('term')) {
    params.term = searchParams.get('term')
  }

  if (searchParams.has('start') || searchParams.has('limit')) {
    params.pagination = {
      start: parseInt(searchParams.get('start') ?? '0'),
      limit: parseInt(searchParams.get('limit') ?? '0'),
    }
  }

  const articles = await getArticles(params)
  return NextResponse.json(articles)
}
