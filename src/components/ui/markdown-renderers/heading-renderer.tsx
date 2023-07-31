import { clsx } from 'clsx'

import { HeadingElementValue } from '@/lib/parse-markdown'

interface HeadingRendererProps {
  heading: HeadingElementValue
}

export function HeadingRenderer({ heading }: HeadingRendererProps) {
  // TODO: Add classes for heading sizes
  const TagName = `h${heading.level}` as keyof JSX.IntrinsicElements
  return (
    <TagName
      className={clsx(
        heading.level === 1 && 'text-4xl font-bold',
        heading.level === 2 && 'text-3xl font-bold',
        heading.level === 3 && 'text-2xl font-bold',
        heading.level === 4 && 'text-xl font-bold',
        heading.level === 5 && 'text-lg font-bold',
        heading.level === 6 && 'text-md font-bold',
        'my-2'
      )}
    >
      {heading.text}
    </TagName>
  )
}
