import { P } from '../p'

interface BlockquoteRendererProps {
  children: React.ReactNode
}

export function BlockquoteRenderer({ children }: BlockquoteRendererProps) {
  return (
    <blockquote className="relative my-5 pl-5 border-l-4 boder-slate-200/30">
      {children}
    </blockquote>
  )
}
