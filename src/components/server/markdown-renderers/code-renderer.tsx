'use client'

import { clsx } from 'clsx'
import { Highlight } from 'prism-react-renderer'

import theme from '@/lib/prism-gruvbox'

interface CodeRendererProps {
  children: React.ReactNode
  inline?: boolean
  className?: string
}

export function CodeRenderer({
  children,
  inline,
  className,
}: CodeRendererProps) {
  const [_, language] = /language-(\w+)/.exec(className || '') || []
  const code = String(children).replace(/\n$/, '')
  return !inline ? (
    <Highlight theme={theme} code={code} language={language ?? 'text'}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <div className="my-4 flex flex-row justify-center w-full">
          <pre
            className={clsx(
              className,
              'py-2 font-mono text-sm rounded-md border border-slate-100/20 max-w-full md:min-w-max flex-1 overflow-x-scroll md:overflow-x-visible bg-neutral-900'
            )}
          >
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line })}
                className="pl-2 pr-5 min-w-max"
              >
                <span className="pr-2 text-[#7c6f64] select-none">
                  {i + 1}.
                </span>
                {line.map((token, key) => {
                  if (
                    token.types.includes('string-property') &&
                    token.types.includes('property')
                  ) {
                    token.types = ['string-property']
                  }
                  return <span key={key} {...getTokenProps({ token })} />
                })}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  ) : (
    <code className="font-mono px-1.5 py-px border border-slate-100/20 bg-neutral-900 rounded-sm text-sm text-[#ebdbb2]">
      {children}
    </code>
  )
}
