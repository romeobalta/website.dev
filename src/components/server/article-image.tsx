import { clsx } from 'clsx'
import Image from 'next/image'
import probe from 'probe-image-size'

import { Maybe } from '@/gql/graphql'

interface ArticleImageProps {
  src?: Maybe<string>
  description?: Maybe<string>
  alt?: Maybe<string>
  className?: string
  variant?: Maybe<'inside' | 'wide' | 'fit'>
}

export async function ArticleImage({
  src,
  description,
  alt,
  className,
  variant = 'wide',
}: ArticleImageProps) {
  if (!src) {
    return null
  }

  const size = await probe(src)

  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center relative',
        'my-2',
        `article-image-${variant}`,
        className
      )}
    >
      <Image
        src={src}
        alt={alt ?? ''}
        width={size.width}
        height={size.height}
      />
      {description && (
        <span className="block mt-2 px-5 w-full max-w-2xl font-roboto font-light italic text-sm text-black">
          {description}
        </span>
      )}
    </div>
  )
}
