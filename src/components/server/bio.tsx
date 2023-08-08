import Image from 'next/image'

interface BioProps {
  name?: string
  handle?: string
  picture?: {
    url: string
    width: string
    height: string
    secure_url: string
    context: {
      custom: {
        alt: string
        caption: string
      }
    }
  }
  description?: string
}

export function Bio({ name, handle, picture, description }: BioProps) {
  return (
    <>
      <Image
        src={picture?.secure_url ?? ''}
        alt={picture?.context.custom.alt ?? ''}
        className="rounded-full w-24 h-24"
        width={parseInt(picture?.width ?? '0')}
        height={parseInt(picture?.height ?? '0')}
      />

      <h1 className="mt-5 text-xl font-source-serif text-center">{name}</h1>

      {handle && (
        <h2 className="text-sm -mt-0.5 font-roboto text-center text-slate-600">
          {handle}
        </h2>
      )}

      <p className="text-sm font-roboto text-center font-light">
        {description}
      </p>
    </>
  )
}
