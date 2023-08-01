import Link from 'next/link'

import { ArticleBox, Bio, Socials } from '@/components'
import { MarkdownRenderer } from '@/components/ui/markdown-renderer'
import { getHome } from '@/data/getHome'
import { parseMarkdown } from '@/lib/parse-markdown'

export const dynamic = 'force-static'

export default async function Home() {
  const { data, loading, error } = await getHome()

  if (error) throw new Error('Oops, romeo is not home')

  const bioParsed = parseMarkdown(data?.bio ?? '')
  // console.log(JSON.stringify(bioParsed, null, 2))

  return (
    <div className="flex flex-col items-center w-full px-5">
      <Bio
        name={data?.name ?? ''}
        description={data?.description ?? ''}
        picture="https://randomuser.me/api/portraits/men/86.jpg"
      />

      <Socials />

      <h1 className="w-full max-w-md mt-10 text-lg font-bold text-center font-source-serif">
        About me
      </h1>
      <div className="w-full max-w-md font-source-serif font-normal text-sm">
        <MarkdownRenderer markdown={bioParsed} />
      </div>

      <h1 className="w-full max-w-md mt-10 text-lg font-bold text-center font-source-serif">
        Links
      </h1>
      <div className="w-full max-w-md font-source-serif font-normal text-sm">
        <ul className="list-disc pl-5">
          <li className="my-1">
            <Link href="/articles" className="text-sky-500">
              Articles I wrote
            </Link>
          </li>
          <li className="my-1">
            <Link href="#" className="text-sky-500">
              Stuff I built
            </Link>
          </li>
        </ul>
      </div>

      <h1 className="w-full max-w-md mt-10 text-lg font-bold text-center font-source-serif">
        Latest articles
      </h1>

      <div className="w-full grid grid-cols-1 @2xl:grid-cols-2 @5xl:grid-cols-4 gap-x-4 gap-y-8 mt-4">
        <ArticleBox
          title="Bit of a longer title for this article to test the layout"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          category="writing"
          date="July 1, 2021"
          link="/articles/lorem-ipsum"
          image="https://picsum.photos/264/264?grayscale"
        />

        <ArticleBox
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          category="thoughts"
          date="July 1, 2021"
          link="/articles/lorem-ipsum"
          image="https://picsum.photos/264/264?grayscale"
        />

        <ArticleBox
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          category="writing"
          date="July 1, 2021"
          link="/articles/lorem-ipsum"
          image="https://picsum.photos/264/264?grayscale"
        />

        <ArticleBox
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          category="thoughts"
          date="July 1, 2021"
          link="/articles/lorem-ipsum"
          image="https://picsum.photos/264/264?grayscale"
        />
      </div>
    </div>
  )
}
