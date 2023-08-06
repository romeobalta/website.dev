import './globals.css'
import { clsx } from 'clsx'
import type { Metadata } from 'next'
import {
  Lusitana,
  Roboto,
  Roboto_Condensed,
  Source_Serif_4,
} from 'next/font/google'

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
  title: process.env.SITE_TAG,
  description: 'The website of Romeo Balta',
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
          'min-h-screen flex flex-col items-center',
          true &&
            'bg-slate-100 text-slate-800 dark:bg-slate-950 dark:text-slate-100',
          false && 'bg-slate-700 text-slate-100'
        )}
      >
        {children}
      </body>
    </html>
  )
}
