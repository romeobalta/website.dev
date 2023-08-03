interface BioProps {
  name: string
  handle?: string
  picture: string
  description: string
}

export function Bio({ name, handle, picture, description }: BioProps) {
  return (
    <>
      <img
        src={picture}
        alt="A picture of a mountain"
        className="rounded-full w-24 h-24"
      />

      <h1 className="mt-2 text-xl font-source-serif text-center">{name}</h1>

      {handle && (
        <h2 className="text-sm -mt-0.5 font-roboto text-center text-slate-600">
          {handle}
        </h2>
      )}

      <p className="text-sm font-roboto text-center text-slate-950">
        {description}
      </p>
    </>
  )
}
