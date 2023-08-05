import './globals.css'
import { clsx } from 'clsx'
import type { Metadata } from 'next'
import {
  Lusitana,
  Open_Sans,
  Roboto,
  Roboto_Condensed,
  Source_Serif_4,
} from 'next/font/google'
import Link from 'next/link'

import { BlogHeader, H2, P } from '@/components/server'

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
const openSans = Open_Sans({
  weight: '800',
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'Articles by Romeo',
  description: 'A collection of articles written by Romeo',
}
export default function NotFound() {
  return (
    <html lang="en">
      <body
        className={clsx(
          lusitana.className,
          sourceSerif.variable,
          robotoCondensed.variable,
          roboto.variable,
          openSans.variable,
          'min-h-screen flex flex-col items-center',
          'bg-slate-100 text-slate-800 dark:bg-slate-950 dark:text-slate-100'
        )}
      >
        <div className="w-full max-w-2xl px-5">
          <BlogHeader border />
        </div>
        <div className="h-full w-full flex flex-col justify-stretch items-center">
          <div className="flex flex-col max-w-md justify-center items-center h-full w-full px-5 @container">
            <h1 className="text-[52vw] leading-[52vw] @sm:text-[15rem] @sm:leading-[15rem] font-open-sans font-black">
              404
            </h1>
            <H2 className="my-0 ">Oopsie, page not found.</H2>
            <P>
              You might find something more interesting by going back{' '}
              <Link href="/articles" className="text-sky-500">
                to the articles
              </Link>
            </P>
          </div>
        </div>
      </body>
    </html>
  )
}
