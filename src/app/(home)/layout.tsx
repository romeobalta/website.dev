import { clsx } from 'clsx'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main
        className={clsx('h-full w-full max-w-md items-stretch py-5 @container')}
      >
        {children}
      </main>
    </>
  )
}
