import Image from 'next/image'
import Link from 'next/link'

import { ArticleBox } from '@/components'
import { ArticleCategory } from '@/components/ui'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category?.replace(/-/g, ' ')

  return (
    <div className="w-full max-w-2xl p-5">
      <ArticleCategory category={category} />
      <main className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 mt-4">
        <ArticleBox
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          date="July 1, 2021"
          link="/article/lorem-ipsum"
          image="https://picsum.photos/800/600?grayscale"
        />

        <ArticleBox
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          date="July 1, 2021"
          link="/article/lorem-ipsum"
          image="https://picsum.photos/810/600?grayscale"
        />

        <ArticleBox
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          date="July 1, 2021"
          link="/article/lorem-ipsum"
          image="https://picsum.photos/800/600?grayscale"
        />

        <ArticleBox
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          date="July 1, 2021"
          link="/article/lorem-ipsum"
          image="https://picsum.photos/810/600?grayscale"
        />
      </main>
    </div>
  )
}
