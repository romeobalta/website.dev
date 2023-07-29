import { clsx } from 'clsx'

interface H1Props {
  className?: string
  children: React.ReactNode
}

export function H1({ children, className }: H1Props) {
  return (
    <h1
      className={clsx(
        'font-source-serif font-black',
        'text-4xl lg:text-[3.5rem] lg:leading-[3.75rem]',
        'my-4',
        'w-full max-w-2xl',
        className
      )}
    >
      {children}
    </h1>
  )
}
