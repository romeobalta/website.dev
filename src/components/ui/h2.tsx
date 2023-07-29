import { clsx } from 'clsx'

interface H2Props {
  className?: string
  children: React.ReactNode
}

export function H2({ children, className }: H2Props) {
  return (
    <h2
      className={clsx(
        'font-source-serif font-[900]',
        'text-[2rem]',
        'my-4',
        'w-full max-w-2xl',
        className
      )}
    >
      {children}
    </h2>
  )
}
