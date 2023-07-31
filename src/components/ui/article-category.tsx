import { clsx } from 'clsx'
import Link from 'next/link'

interface ArticleCategoryProps {
  className?: string
  category: string
}

export function ArticleCategory({ category, className }: ArticleCategoryProps) {
  const link = `/articles?category=${category.replace(/\s/g, '-')}`

  return (
    <div
      className={clsx(
        'font-roboto-condensed text-base',
        'w-full max-w-2xl',
        className
      )}
    >
      in{' '}
      <Link href={link}>
        <span className="font-bold underline underline-offset-4 uppercase">
          {category}
        </span>
      </Link>
    </div>
  )
}
