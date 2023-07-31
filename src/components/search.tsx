import React from 'react'

import { Button, Select } from './ui'

interface SearchProps {
  searchParams: {
    category: string
  }
}

export function Search({ searchParams }: SearchProps) {
  const [search, setSearch] = React.useState('')
  const [dateRange, setDateRange] = React.useState<string | null>(null)
  const [category, setCategory] = React.useState<string | null>(
    searchParams?.category?.toLowerCase() || null
  )

  const resetFilters = React.useCallback(() => {
    setSearch('')
    setDateRange(null)
    setCategory(null)
  }, [])
  return (
    <div className="w-full flex flex-col items-center bg-slate-200 font-roboto">
      <div className="w-full max-w-6xl flex flex-row flex-wrap gap-2 px-5 py-3">
        <input
          type="text"
          placeholder="Search"
          className="border border-slate-900/20 p-2 text-sm font-light basis-full @2xl:basis-auto @2xl:min-w-[330px] focus:outline-none focus-visible:border-slate-950"
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
  )
}
