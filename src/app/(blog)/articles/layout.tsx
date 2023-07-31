import type { Metadata } from 'next'

import { BlogHeader } from '@/components'

export const metadata: Metadata = {
  title: 'Articles by Romeo',
  description: 'A collection of articles written by Romeo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="w-full max-w-6xl px-5">
        <BlogHeader />
      </div>
      <div className="h-full w-full flex flex-col justify-stretch items-center @container">
        {children}
      </div>
    </>
  )
}
