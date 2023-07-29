import { clsx } from 'clsx'
import Image from 'next/image'

interface ArticleImageProps {
  src: string
  description: string
  alt: string
  className?: string
  variant?: 'default' | 'wide' | 'fit'
}

export function ArticleImage({
  src,
  description,
  alt,
  className,
  variant = 'default',
}: ArticleImageProps) {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center',
        'my-2',
        `article-image-${variant}`,
        className
      )}
    >
      <img src={src} alt={alt} />
      {description && (
        <span className="block mt-2 px-5 w-full max-w-2xl font-roboto font-light italic text-sm text-black">
          {description}
        </span>
      )}
    </div>
  )
}
