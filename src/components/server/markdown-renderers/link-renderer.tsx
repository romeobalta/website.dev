import Link from 'next/link'

interface LinkRendererProps {
  children: React.ReactNode
  href?: string
  title?: string
}

export function LinkRenderer({ children, href, title }: LinkRendererProps) {
  return (
    <Link href={href ?? ''} title={title} className="text-sky-500">
      {children}
    </Link>
  )
}
