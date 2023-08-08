import { clsx } from 'clsx'

interface HeadingProps {
  className?: string
  children: React.ReactNode
}

export function H1({ children, className }: HeadingProps) {
  return (
    <h1
      className={clsx(
        'font-source-serif font-black',
        'text-4xl lg:text-[2.25rem] lg:leading-[2.5rem]',
        'my-5',
        'w-full max-w-2xl',
        className
      )}
    >
      {children}
    </h1>
  )
}

export function H2({ children, className }: HeadingProps) {
  return (
    <h2
      className={clsx(
        'font-source-serif font-[900]',
        'text-[2rem] leading-[2.25rem]',
        'my-5',
        'w-full max-w-2xl',
        className
      )}
    >
      {children}
    </h2>
  )
}

export function H3({ children, className }: HeadingProps) {
  return (
    <h3
      className={clsx(
        'font-source-serif font-[900]',
        'text-[1.75rem] leading-[1.75rem]',
        'my-5',
        'w-full max-w-2xl',
        className
      )}
    >
      {children}
    </h3>
  )
}

export function H4({ children, className }: HeadingProps) {
  return (
    <h4
      className={clsx(
        'font-source-serif font-[900]',
        'text-[1.5rem] leading-[1.5rem]',
        'my-5',
        'w-full max-w-2xl',
        className
      )}
    >
      {children}
    </h4>
  )
}

export function H5({ children, className }: HeadingProps) {
  return (
    <h5
      className={clsx(
        'font-source-serif font-[900]',
        'text-[1.25rem] leading-[1.25rem]',
        'my-5',
        'w-full max-w-2xl',
        className
      )}
    >
      {children}
    </h5>
  )
}

export function H6({ children, className }: HeadingProps) {
  return (
    <h6
      className={clsx(
        'font-source-serif font-[900]',
        'text-[1rem] leading-[1rem]',
        'my-5',
        'w-full max-w-2xl',
        className
      )}
    >
      {children}
    </h6>
  )
}
