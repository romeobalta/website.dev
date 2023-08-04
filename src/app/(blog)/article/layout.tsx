import { BlogHeader } from '@/components/server'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="w-full max-w-6xl px-5">
        <BlogHeader border />
      </div>
      <div className="h-full w-full flex flex-col justify-stretch items-center">
        {children}
      </div>
    </>
  )
}
