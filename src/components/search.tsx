import React, { Suspense } from 'react'

import { useArticleSearch } from '@/hooks/useArticleSearch'

import { Button, Select } from './ui'

export function Search() {
  const {
    categories,
    selectedCategory,
    selectCategory,
    selectedYear,
    selectYear,
    resetFilters,
  } = useArticleSearch()

  const [search, setSearch] = React.useState('')

  const categoriesOptions = React.useMemo(
    () =>
      categories?.map(category => ({
        value: category?.attributes?.slug ?? '',
        label: category?.attributes?.name ?? '',
      })) ?? [],
    [categories]
  )

  // this is a hack, as i've started bloggin in 2023
  const YEARS = React.useMemo(() => {
    const currentYear = new Date().getFullYear()
    return Array.from({ length: currentYear - 2023 + 1 }, (_, i) => {
      const year = (currentYear - i).toString()
      return { value: year, label: year }
    })
  }, [])

  // TODO: remove suspene, add loading state
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
          options={YEARS}
          selected={selectedYear}
          onChange={selectYear}
          placeholder="Year"
          reset="All years"
        />

        <Select
          options={categoriesOptions}
          selected={selectedCategory}
          onChange={selectCategory}
          placeholder="Category"
          reset="All categories"
        />

        <Button onClick={resetFilters}>Clear filters</Button>
      </div>
    </div>
  )
}
