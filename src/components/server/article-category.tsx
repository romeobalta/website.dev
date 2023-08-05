import { clsx } from 'clsx'
import Link from 'next/link'

import { Maybe } from '@/gql/graphql'

interface ArticleCategoryProps {
  className?: string
  name?: Maybe<string>
  slug?: Maybe<string>
}

export function ArticleCategory({
  name,
  slug,
  className,
}: ArticleCategoryProps) {
  const link = `/articles/${slug}`

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
          {name}
        </span>
      </Link>
    </div>
  )
}
