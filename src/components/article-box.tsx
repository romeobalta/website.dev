import Link from 'next/link'

import { Maybe } from '@/gql/graphql'
import { PLACEHOLDER_IMAGE } from '@/lib/constants'

interface ArticleBoxProps {
  title: string
  description: string
  category?: string
  date: string
  link: string
  image: Maybe<string>
}

export function ArticleBox({
  title,
  description,
  category,
  date,
  link,
  image,
}: ArticleBoxProps) {
  if (!image) {
    image = PLACEHOLDER_IMAGE
  }

  return (
    <Link
      href={link}
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
    >
      <div className="w-full @5xl:h-auto flex flex-row @5xl:flex-col group gap-x-3 gap-y-2">
        <span className="hidden @5xl:block text-xs text-left font-roboto">
          {new Date(date).toLocaleDateString('en-us', {
            year: 'numeric',
            day: '2-digit',
            month: 'long',
          })}{' '}
          {category && (
            <>
              in{' '}
              <span className="font-bold uppercase font-roboto-condensed">
                {category}
              </span>
            </>
          )}
        </span>

        <div className="w-5/12 @5xl:w-full">
          <img
            className="w-full h-auto border border-slate-900/10"
            src={image}
            alt="Article Image"
          />
        </div>

        <div className="w-7/12 @5xl:w-full flex flex-col justify-start gap-y-2">
          <h1 className="w-full -mt-0.5 @5xl:mt-0 text-slate-950 font-source-serif text-lg leading-5 font-bold group-hover:underline">
            {title}
          </h1>

          <h2 className="w-full text-slate-950 font-roboto text-sm leading-[1.175rem]">
            {description}
          </h2>

          <span className="flex-1 w-full block @5xl:hidden text-xs text-left font-roboto font-light">
            <span className="block">
              on
              <span className="font-bold uppercase font-roboto-condensed">
                {' '}
                {date}
              </span>
            </span>
            <span className="block">
              {category && (
                <>
                  in
                  <span className="font-bold uppercase font-roboto-condensed">
                    {' '}
                    {category}
                  </span>
                </>
              )}
            </span>
          </span>
        </div>
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
