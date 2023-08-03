import { clsx } from 'clsx'

interface ArticleDescProps {
  className?: string
  children: React.ReactNode
}

export function ArticleDesc({ children, className }: ArticleDescProps) {
  return (
    <p
      className={clsx(
        'hidden md:block',
        'font-roboto text-lg',
        'w-full max-w-2xl',
        className
      )}
    >
      {children}
    </p>
  )
}
