import { clsx } from 'clsx'
import Link from 'next/link'

interface ArticleBoxProps {
  title: string
  description: string
  category?: string | null
  date?: string
  link: string
  className?: string
}

export function ArticleBox({
  title,
  description,
  category,
  date,
  link,
  className = '',
}: ArticleBoxProps) {
  return (
    <Link
      href={link}
      className={clsx(
        `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950`,
        className
      )}
    >
      <div className={clsx(`w-full flex flex-row group gap-x-5 gap-y-2`)}>
        <div className="w-full flex flex-col justify-start gap-y-2">
          <h1 className="w-full -mt-0.5 text-slate-950 font-source-serif text-lg leading-5 font-bold group-hover:underline">
            {title}
          </h1>

          <span className="flex-1 w-full block text-xs text-left font-roboto font-light">
            {date && (
              <>
                {' '}
                on
                <span className="font-bold uppercase font-roboto-condensed">
                  {' '}
                  {new Date(date).toLocaleDateString('en-us', {
                    year: 'numeric',
                    day: '2-digit',
                    month: 'long',
                  })}
                </span>
              </>
            )}
            {category && (
              <>
                {' '}
                in
                <span className="font-bold uppercase font-roboto-condensed">
                  {' '}
                  {category}
                </span>
              </>
            )}
          </span>

          <h2 className="w-full text-slate-950 font-roboto font-light text-sm leading-[1.175rem]">
            {description}
          </h2>
        </div>
      </div>
    </Link>
  )
}
