import { clsx } from 'clsx'
import '../globals.css'
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
  title: 'romeo.dev',
  description: "Home of Romeo's thoughts",
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
          'bg-slate-100 text-slate-800 dark:bg-slate-950 dark:text-slate-100'
        )}
      >
        <main className={clsx('h-full w-full max-w-2xl items-stretch py-5')}>
          {children}
        </main>
      </body>
    </html>
  )
}
