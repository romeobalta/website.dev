'use client'

import React from 'react'

import { ArticleBox } from '@/components'
import { ArticleCategory, Button, Select } from '@/components/ui'

interface CategoryPageProps {
  query: {
    category: string
  }
}

export default function CategoryPage({ query }: CategoryPageProps) {
  const [search, setSearch] = React.useState('')
  const [dateRange, setDateRange] = React.useState<string | null>(null)
  const [category, setCategory] = React.useState<string | null>(
    query?.category?.replace(/-/g, ' ') || null
  )

  const resetFilters = React.useCallback(() => {
    setSearch('')
    setDateRange(null)
    setCategory(null)
  }, [])

  return (
    <>
      <div className="w-full flex flex-col items-center bg-slate-200 font-roboto">
        <div className="w-full max-w-2xl flex flex-row flex-wrap gap-2 px-5 py-3">
          <input
            type="text"
            placeholder="Search"
            className="col-span-3 border border-slate-900/20 p-2 text-sm font-light basis-full sm:basis-auto sm:flex-1"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <Select
            options={{
              '2023': '2023',
              '2022': '2022',
              '2021': '2021',
            }}
            selected={dateRange}
            onChange={setDateRange}
            placeholder="Date range"
            reset="All dates"
          />

          <Select
            options={{
              'web-development': 'Web development',
              'software-engineering': 'Software engineering',
              career: 'Career',
              productivity: 'Productivity',
              personal: 'Personal',
            }}
            selected={category}
            onChange={setCategory}
            placeholder="Category"
            reset="All categories"
          />

          <Button onClick={resetFilters}>Clear filters</Button>
        </div>
      </div>

      <main className="w-full max-w-2xl flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 mt-4 px-5">
        <ArticleBox
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          date="July 1, 2021"
          link="/article/lorem-ipsum"
          image="https://picsum.photos/800/600?grayscale"
        />

        <ArticleBox
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          date="July 1, 2021"
          link="/article/lorem-ipsum"
          image="https://picsum.photos/810/600?grayscale"
        />

        <ArticleBox
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          date="July 1, 2021"
          link="/article/lorem-ipsum"
          image="https://picsum.photos/800/600?grayscale"
        />

        <ArticleBox
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          date="July 1, 2021"
          link="/article/lorem-ipsum"
          image="https://picsum.photos/810/600?grayscale"
        />
      </main>
    </>
  )
}
