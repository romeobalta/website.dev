import { clsx } from 'clsx'
import Link from 'next/link'

interface BlogHeaderProps {
  border?: boolean
}

export function BlogHeader({ border }: BlogHeaderProps) {
  return (
    <header
      className={clsx(
        'w-full font-roboto py-3',
        border && 'border-b border-slate-800/30'
      )}
    >
      <Link href="/">
        <h1 className="font-source-serif text-3xl inline-block">romeo.dev</h1>
      </Link>
    </header>
  )
}
