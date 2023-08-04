import { clsx } from 'clsx'
import Image from 'next/image'

import { Maybe } from '@/gql/graphql'

interface SocialsProps {
  className?: string
  socials?: Maybe<
    Maybe<{
      icon: string
      link: string
    }>[]
  >
}

export function Socials({ className, socials }: SocialsProps) {
  return (
    <div className={clsx('flex justify-center space-x-4', className)}>
      {socials?.map(social => {
        const { icon, link } = {
          icon: '',
          link: '',
          ...social,
        }
        return (
          <a
            key={icon}
            href={link ?? ''}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`/icons/${icon}.svg`}
              alt={icon ?? ''}
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </a>
        )
      })}
    </div>
  )
}
