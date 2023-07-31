'use client'

import { clsx } from 'clsx'
import { Highlight } from 'prism-react-renderer'

import { CodeElementValue } from '@/lib/parse-markdown'
import theme from '@/lib/prism-gruvbox'

interface CodeRendererProps {
  code: CodeElementValue
}

export function CodeRenderer({ code }: CodeRendererProps) {
  console.log(code)

  return (
    <Highlight theme={theme} code={code.lines} language={code.language}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <div className="my-4 flex flex-row justify-center w-full">
          <pre
            className={clsx(
              className,
              'py-2 font-mono text-sm rounded-md border border-slate-900/20 max-w-full md:min-w-max flex-1 bg-[#f9f5d7] overflow-x-scroll md:overflow-x-visible'
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
                  return <span key={key} {...getTokenProps({ token })} />
                })}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}
