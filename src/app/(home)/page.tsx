import Link from 'next/link'

import { ArticleBox, Bio, Socials } from '@/components'

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-3xl px-5">
      <Bio
        name="Romeo Balta"
        handle="@romeobalta"
        bio="dad, dev, super hero"
        picture="https://randomuser.me/api/portraits/men/86.jpg"
      />

      <Socials />

      <div className="w-full mt-5 font-source-serif max-w-md font-normal text-sm">
        <ul className="list-disc pl-5">
          <li className="my-1">
            {`📱I'm a mobile engineer at `}
            <Link className="text-sky-500" href="#">
              NatWest Boxed
            </Link>
          </li>
          <li className="my-1">
            {`💻 I've worked as a software engineer for around 15 years`}
          </li>
          <li className="my-1">{`📊 I'm currently studying data science`}</li>
          <li className="my-1">
            {`💡 I'm on a journey to test as many business ideas as i can`}
          </li>
          <li className="my-1">
            {`👨‍👩‍👦‍👦 I'm the dad of two sweet boys and the husband of a`}{' '}
            <Link href="#" className="text-sky-500">
              very smart and beautiful woman
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full max-w-md mt-5 grid grid-cols-1 xs:grid-cols-2 gap-3">
        <Link href="/articles" className="w-full max-w-md">
          <div className="w-full rounded-md bg-slate-900 text-slate-100 font-roboto border border-900/50 text-lg py-2 px-3">
            Articles I wrote
          </div>
        </Link>

        <Link href="/aticles" className="w-full max-w-md">
          <div className="w-full rounded-md bg-slate-900 text-slate-100 font-roboto border border-900/50 text-lg py-2 px-3">
            Stuff I built
          </div>
        </Link>
      </div>

      <h1 className="w-full text-center mt-10 mb-2 text-2xl">
        Latest articless
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 mt-4">
        <ArticleBox
          title="Bit of a longer title for this article to test the layout"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          category="writing"
          date="July 1, 2021"
          link="/articles/lorem-ipsum"
          image="https://picsum.photos/800/600?grayscale"
        />

        <ArticleBox
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          category="thoughts"
          date="July 1, 2021"
          link="/articles/lorem-ipsum"
          image="https://picsum.photos/810/600?grayscale"
        />

        <ArticleBox
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          category="writing"
          date="July 1, 2021"
          link="/articles/lorem-ipsum"
          image="https://picsum.photos/800/600?grayscale"
        />

        <ArticleBox
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          category="thoughts"
          date="July 1, 2021"
          link="/articles/lorem-ipsum"
          image="https://picsum.photos/810/600?grayscale"
        />
      </div>
    </div>
  )
}
