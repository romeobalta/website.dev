import { clsx } from 'clsx'

interface ArticleInfoProps {
  className?: string
  author: string
  date: string
  readingTime: string
}

export function ArticleInfo({
  author,
  date,
  readingTime,
  className,
}: ArticleInfoProps) {
  return (
    <div
      className={clsx(
        'font-roboto text-xs',
        'w-full max-w-2xl',
        'mb-4',
        className
      )}
    >
      <span>By</span> <span className="font-bold">{author}</span> | {date} |{' '}
      {readingTime} read
    </div>
  )
}
