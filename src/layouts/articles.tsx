import { ArticleList } from "@/components/blog/article-list";
import { BlogHeader } from "@/components/blog/blog-header";
import { PropsOf } from "@/util";

type ArticlesLayoutProps = {
  category: string | null;
};

export function ArticlesLayout({ category }: ArticlesLayoutProps) {
  const data: PropsOf<typeof ArticleList>["articles"] = [];

  // TODO: add jsonLd
  const jsonLd = {};

  // TODO: add slugify
  return (
    <div className="w-full max-w-xl px-5 pb-5 @container">
      <BlogHeader border />
      <div className="h-full w-full flex flex-col justify-stretch items-center">
        <main className="w-full py-5">
          <ArticleList articles={data ?? []} showCategories />
        </main>
      </div>
    </div>
  );
}
