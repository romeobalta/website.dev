import Link from 'next/link'

interface ArticleBoxProps {
  title: string
  description: string
  category?: string
  date: string
  link: string
  image: string
}

export function ArticleBox({
  title,
  description,
  category,
  date,
  link,
  image,
}: ArticleBoxProps) {
  return (
    <Link href={link}>
      <div className="w-full h-48 lg:h-auto flex flex-col items-stretch group flex-wrap gap-2">
        <span className="flex-1 w-7/12 lg:w-full order-4 lg:order-1 block text-xs text-left font-roboto">
          {date}{' '}
          {category && (
            <>
              in{' '}
              <span className="font-bold uppercase font-roboto-condensed">
                {category}
              </span>
            </>
          )}
        </span>

        <div className="w-5/12 lg:w-full order-1 lg:order-2 h-48 border border-slate-900/5 overflow-hidden flex justify-center">
          <img
            className="w-full h-auto object-cover "
            src={image}
            alt="Article Image"
          />
        </div>

        <h1 className="w-7/12 h-auto lg:w-full order-2 lg:order-3 text-slate-950 font-source-serif text-lg leading-5 font-bold group-hover:underline">
          {title}
        </h1>

        <h2 className="w-7/12 lg:w-full order-3 lg:order-4 text-slate-950 font-roboto text-sm leading-[1.175rem]">
          {description}
        </h2>
      </div>
    </Link>
  )
}

// <div className="w-full flex flex-col items-stretch group">
//   <span className="block text-xs w-full text-left font-roboto mb-2">
//     {date}{' '}
//     {category && (
//       <>
//         in{' '}
//         <span className="font-bold uppercase font-roboto-condensed">
//           {category}
//         </span>
//       </>
//     )}
//   </span>
//   <div className="w-full h-48 border border-slate-900/5 overflow-hidden flex justify-center">
//     <img
//       className="w-full h-auto object-cover "
//       src={image}
//       alt="Article Image"
//     />
//   </div>
//   <h1 className="w-full text-slate-950 font-source-serif text-lg font-bold my-1 group-hover:underline">
//     {title}
//   </h1>
//   <h2 className="w-full text-slate-950 font-roboto text-sm leading-[1.175rem]">
//     {description}
//   </h2>
// </div>
