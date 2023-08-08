import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import {
  BlockquoteRenderer,
  CodeRenderer,
  HeadingRenderer,
  LinkRenderer,
  ListRenderer,
} from './markdown-renderers'
import { P } from './p'

interface MarkdownRendererProps {
  markdown?: string | null
}

export function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      // eslint-disable-next-line react/no-children-prop
      children={markdown ?? ''}
      components={{
        p: P,
        h1: HeadingRenderer,
        h2: HeadingRenderer,
        h3: HeadingRenderer,
        h4: HeadingRenderer,
        h5: HeadingRenderer,
        h6: HeadingRenderer,
        a: LinkRenderer,
        hr: () => <hr className="mt-4 border-t h-0 border-slate-200/30" />,
        blockquote: BlockquoteRenderer,
        ul: ListRenderer,
        ol: ListRenderer,
        code: CodeRenderer,
      }}
    />
  )
}
