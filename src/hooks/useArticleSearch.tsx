'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'

import { GetArticlesResultData, useArticles } from '@/data/useArticles'
import { GetCategoriesResultData, useCategories } from '@/data/useCategories'
import { ARTICLES_PER_PAGE } from '@/lib/constants'

export interface ArticleSearchContextValue {
  articles?: GetArticlesResultData
  loading: boolean
  categories?: GetCategoriesResultData
  hasNextPage: boolean
  goToNextPage: () => void
  selectedCategory: string | null
  selectCategory: (category: string | null) => void
  selectedYear: string | null
  selectYear: (year: string | null) => void
  resetFilters: () => void
  updateSearchTerm: (searchTerm: string) => void
}

const ArticleSearchContext = React.createContext<ArticleSearchContextValue>({
  articles: [],
  loading: false,
  categories: [],
  hasNextPage: false,
  goToNextPage: () => {},
  selectedCategory: null,
  selectCategory: () => {},
  selectedYear: null,
  selectYear: () => {},
  resetFilters: () => {},
  updateSearchTerm: () => {},
})

interface UseArticleSearchParams {
  category?: string
  year?: string
}

export interface ArticleSearchProviderProps {
  children: React.ReactNode
  searchParams: UseArticleSearchParams
}

export function ArticleSearchProvider({
  children,
}: ArticleSearchProviderProps) {
  // const router = useRouter()
  // const pathname = usePathname()
  const searchParams = useSearchParams()

  const [articles, setArticles] = React.useState<GetArticlesResultData>([])
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    searchParams.get('category') || null
  )
  const [selectedYear, setSelectedYear] = React.useState<string | null>(null)
  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const [page, setPage] = React.useState(1)
  const [hasNextPage, setHasNextPage] = React.useState(false)

  const {
    data: categories,
    // loading: categoriesLoading,
    // error: categoriesError,
  } = useCategories()

  const {
    data: articlesPage,
    pagination,
    loading,
    // error,
  } = useArticles({
    pagination: {
      start: (page - 1) * ARTICLES_PER_PAGE,
      limit: ARTICLES_PER_PAGE,
    },
    category: selectedCategory,
    year: selectedYear,
    term: searchTerm,
  })

  // const modifyQueryString = React.useCallback(
  //   (filters: { name: string; value: string | null }[]) => {
  //     const params = new URLSearchParams(Array.from(searchParams.entries()))
  //
  //     filters.forEach(filter => {
  //       if (filter.value) {
  //         params.set(filter.name, filter.value)
  //         return
  //       }
  //
  //       params.delete(filter.name)
  //     })
  //
  //     router.push(`${pathname}?${params.toString()}`)
  //   },
  //   [pathname, router, searchParams]
  // )

  React.useEffect(() => {
    if (articlesPage) {
      setArticles(prevArticles => [...prevArticles, ...articlesPage])
    }
  }, [articlesPage])

  const resetPage = React.useCallback(() => {
    setPage(1)
    setArticles([])
  }, [])

  // debounce this
  const updateSearchTerm = React.useCallback(
    (term: string) => {
      resetPage()
      setSearchTerm(term)
    },
    [resetPage]
  )

  const selectCategory = React.useCallback(
    (category: string | null) => {
      setSelectedCategory(category)
      resetPage()
    },
    [resetPage]
  )

  const selectYear = React.useCallback(
    (year: string | null) => {
      setSelectedYear(year)
      resetPage()
    },
    [resetPage]
  )

  const resetFilters = React.useCallback(() => {
    if (selectedCategory || selectedYear || searchTerm.length) {
      resetPage()
      setSelectedCategory(null)
      setSelectedYear(null)
      setSearchTerm('')
    }
  }, [resetPage, searchTerm, selectedCategory, selectedYear])

  React.useEffect(() => {
    setHasNextPage(pagination?.page !== pagination?.pageCount)
  }, [pagination?.page, pagination?.pageCount])

  const goToNextPage = React.useCallback(() => {
    setPage(prevPage => prevPage + 1)
  }, [setPage])

  const value = React.useMemo(
    () => ({
      articles,
      loading,
      categories,
      hasNextPage,
      goToNextPage,
      selectedCategory,
      selectCategory,
      selectedYear,
      selectYear,
      resetFilters,
      updateSearchTerm,
    }),
    [
      articles,
      categories,
      goToNextPage,
      hasNextPage,
      loading,
      resetFilters,
      selectCategory,
      selectYear,
      updateSearchTerm,
      selectedCategory,
      selectedYear,
    ]
  )

  return (
    <ArticleSearchContext.Provider value={value}>
      {children}
    </ArticleSearchContext.Provider>
  )
}

export function useArticleSearch() {
  const context = React.useContext(ArticleSearchContext)

  if (context === undefined) {
    throw new Error(
      'useArticleSearch must be used within a ArticleSearchProvider'
    )
  }

  return context
}
