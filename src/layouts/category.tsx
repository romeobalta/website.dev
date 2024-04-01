import { ArticleList } from "@/components/blog/article-list";
import { BlogHeader } from "@/components/blog/blog-header";
import { Footer } from "@/components/common/footer";

type CategoryLayoutProps = {
  category: string;
};

export function CategoryLayout({ category }: CategoryLayoutProps) {
  // TODO: add jsonLd
  const jsonLd = {};

  // TODO: add slugify
  return (
    <div className="w-full h-full max-w-xl flex flex-col flex-1">
      <div className="flex-1 w-full px-5 @container">
        <BlogHeader border />
        <div className="h-full w-full flex flex-col justify-stretch items-center">
          <main className="w-full py-5">
            <ArticleList category={category} />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
