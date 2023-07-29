import { clsx } from 'clsx'
import '../../globals.css'
import type { Metadata } from 'next'
import {
  Lusitana,
  Roboto,
  Roboto_Condensed,
  Source_Serif_4,
} from 'next/font/google'
import Link from 'next/link'

const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lusitana',
})
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-source-serif',
})
const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
})
const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

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
    <html lang="en">
      <body
        className={clsx(
          lusitana.className,
          sourceSerif.variable,
          robotoCondensed.variable,
          roboto.variable,
          'bg-slate-100 text-slate-800 min-h-screen flex flex-col items-center'
        )}
      >
        <div className="w-full max-w-2xl px-5">
          <header className="w-full font-roboto border-b border-slate-800/30 py-3 grid grid-cols-3">
            <Link href="/">
              <h1 className="font-source-serif text-3xl">romeo.dev</h1>
            </Link>
          </header>
        </div>
        <div className="h-full w-full flex flex-col justify-stretch items-center">
          {children}
        </div>
      </body>
    </html>
  )
}
