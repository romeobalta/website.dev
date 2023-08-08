import { BlogHeader } from '@/components/server'

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
