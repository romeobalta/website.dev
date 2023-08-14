import { clsx } from 'clsx'
import Link from 'next/link'

import { Maybe } from '@/gql/graphql'

interface ArticleCategoryProps {
  className?: string
  name?: Maybe<string>
  slug?: Maybe<string>
  date?: Maybe<string>
  readingTime?: Maybe<string>
}

export function ArticleCategory({
  name,
  slug,
  className,
  date,
  readingTime,
}: ArticleCategoryProps) {
  const link = `/articles/${slug}`

  return (
    <div
      className={clsx(
        'font-roboto-condensed text-sm text-center',
        'w-full max-w-2xl my-4',
        className
      )}
    >
      on <span className="font-bold uppercase">{date}</span> in{' '}
      <Link href={link}>
        <span className="font-bold underline underline-offset-4 uppercase">
          {name}
        </span>
      </Link>{' '}
      <span className="block">{readingTime} read</span>
    </div>
  )
}
