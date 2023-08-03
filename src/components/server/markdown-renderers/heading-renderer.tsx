import { clsx } from 'clsx'

import { HeadingElementValue } from '@/lib/parse-markdown'

import { H1, H2, H3, H4, H5, H6 } from '../headings'

interface HeadingRendererProps {
  heading: HeadingElementValue
}

export function HeadingRenderer({ heading }: HeadingRendererProps) {
  if (heading.level === 1) {
    return <H1>{heading.text}</H1>
  }

  if (heading.level === 2) {
    return <H2>{heading.text}</H2>
  }

  if (heading.level === 3) {
    return <H3>{heading.text}</H3>
  }

  if (heading.level === 4) {
    return <H4>{heading.text}</H4>
  }

  if (heading.level === 5) {
    return <H5>{heading.text}</H5>
  }

  return <H6>{heading.text}</H6>
}
