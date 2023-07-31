import { Markdown } from '@/lib/parse-markdown'

import {
  BlockquoteRenderer,
  CodeRenderer,
  HeadingRenderer,
  ListRenderer,
  ParagraphRenderer,
} from './markdown-renderers'

interface MarkdownRendererProps {
  markdown: Markdown
}

export function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  return (
    <>
      {markdown.map((element, index) => {
        switch (element.type) {
          case 'paragraph':
            return <ParagraphRenderer key={index} paragraph={element.value} />
          case 'list':
            return <ListRenderer key={index} list={element.value} />
          case 'heading':
            return <HeadingRenderer key={index} heading={element.value} />
          case 'code':
            return <CodeRenderer key={index} code={element.value} />
          case 'blockquote':
            return <BlockquoteRenderer key={index} blockquote={element.value} />
          default:
            return null
        }
      })}
    </>
  )
}
