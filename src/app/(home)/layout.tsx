import { clsx } from 'clsx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'romeo.dev',
  description: "Home of Romeo's thoughts",
  metadataBase: new URL(`https://${process.env.SITE_TAG}`),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: 'romeo.dev',
    description: "Home of Romeo's thoughts",
    siteName: process.env.SITE_TAG,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main
        className={clsx(
          'h-full w-full max-w-6xl items-stretch py-5 @container'
        )}
      >
        {children}
      </main>
    </>
  )
}
