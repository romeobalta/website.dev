import { clsx } from 'clsx'

export interface ListRendererProps {
  children: React.ReactNode
  ordered?: boolean
}

export function ListRenderer({ children, ordered }: ListRendererProps) {
  const ListTag = ordered ? 'ol' : 'ul'
  return (
    <ListTag
      className={clsx(ordered ? 'list-decimal' : 'list-disc', 'pl-5 w-full')}
    >
      {children}
    </ListTag>
  )
}
