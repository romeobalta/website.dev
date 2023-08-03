import { NextRequest, NextResponse } from 'next/server'

import { getCategories } from '@/data/getCategories'

export async function GET() {
  const articles = await getCategories()
  return NextResponse.json(articles)
}
