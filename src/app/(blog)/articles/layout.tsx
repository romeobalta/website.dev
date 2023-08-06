import type { Metadata } from 'next'

import { BlogHeader } from '@/components/server'

// export const metadata: Metadata = {
//   title: 'Articles - romeo.dev',
//   description: 'A collection of articles written by Romeo',
//   metadataBase: new URL(`https://${process.env.SITE_TAG}`),
//   alternates: {
//     canonical: '/articles',
//   },
//   openGraph: {
//     type: 'website',
//     title: 'Articles - romeo.dev',
//     description: 'A collection of articles written by Romeo',
//     siteName: process.env.SITE_TAG,
//   },
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full max-w-xl px-5 pb-5 md@container">
      <BlogHeader border />
      <div className="h-full w-full flex flex-col justify-stretch items-center">
        {children}
      </div>
    </div>
  )
}
