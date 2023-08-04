import Link from 'next/link'

import { ParagraphElementValue } from '@/lib/parse-markdown'

import { P } from '../p'

export const renderParagraphElement = (
  element: ParagraphElementValue,
  key: number | string
) => {
  switch (element.type) {
    case 'bold':
      return (
        <strong key={key} className="font-bold">
          {element.value.map((element, index) =>
            renderParagraphElement(element, `${key}-${index}`)
          )}
        </strong>
      )
    case 'italic':
      return (
        <i key={key} className="italic">
          {element.value.map((element, index) =>
            renderParagraphElement(element, `${key}-${index}`)
          )}
        </i>
      )
    case 'strikethrough':
      return (
        <span key={key} className="line-through">
          {element.value.map((element, index) =>
            renderParagraphElement(element, `${key}-${index}`)
          )}
        </span>
      )
    case 'link':
      return (
        <Link
          key={key}
          className="text-sky-500"
          href={element.value.url}
          title={element.value.tooltip}
        >
          {element.value.title}
        </Link>
      )
    case 'code':
      return (
        <code
          key={key}
          className="font-mono px-1.5 py-px border border-slate-900/20 bg-[#f9f5d7] rounded-sm text-sm text-[#9d0006]"
        >
          {element.value}
        </code>
      )
    case 'underline':
      return (
        <span key={key} className="underline">
          {element.value.map((element, index) =>
            renderParagraphElement(element, `${key}-${index}`)
          )}
        </span>
      )
    case 'text':
    default:
      return <span key={key}>{element.value}</span>
  }
}

export interface ParagraphRendererProps {
  paragraph: ParagraphElementValue[]
}

export function ParagraphRenderer({ paragraph }: ParagraphRendererProps) {
  return (
    <P>
      {paragraph.map((element, index) =>
        renderParagraphElement(element, index)
      )}
    </P>
  )
}
