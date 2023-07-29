import { clsx } from 'clsx'

interface PProps {
  children: React.ReactNode
  className?: string
}

export function P({ children, className }: PProps) {
  return (
    <p className={clsx('text-lg my-4', 'w-full max-w-2xl', className)}>
      {children}
    </p>
  )
}
