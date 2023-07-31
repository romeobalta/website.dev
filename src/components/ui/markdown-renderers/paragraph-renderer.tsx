import Link from 'next/link'

import { ParagraphElementValue } from '@/lib/parse-markdown'

export const renderParagraphElement = (element: ParagraphElementValue) => {
  switch (element.type) {
    case 'bold':
      return (
        <strong className="font-bold">
          {element.value.map(renderParagraphElement)}
        </strong>
      )
    case 'italic':
      return (
        <i className="italic">{element.value.map(renderParagraphElement)}</i>
      )
    case 'strikethrough':
      return (
        <span className="line-through">
          {element.value.map(renderParagraphElement)}
        </span>
      )
    case 'link':
      return (
        <Link
          className="text-sky-500"
          href={element.value.url}
          title={element.value.tooltip}
        >
          {element.value.title}
        </Link>
      )
    case 'code':
      return (
        <code className="font-mono px-1.5 py-px border border-slate-900/20 bg-[#f9f5d7] rounded-sm text-sm text-[#9d0006]">
          {element.value}
        </code>
      )
    case 'underline':
      return (
        <span className="underline">
          {element.value.map(renderParagraphElement)}
        </span>
      )
    case 'text':
    default:
      return <span>{element.value}</span>
  }
}

export interface ParagraphRendererProps {
  paragraph: ParagraphElementValue[]
}

export function ParagraphRenderer({ paragraph }: ParagraphRendererProps) {
  return <p>{paragraph.map(element => renderParagraphElement(element))}</p>
}
