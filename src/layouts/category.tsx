import { ArticleList } from "@/components/blog/article-list";
import { BlogHeader } from "@/components/blog/blog-header";
import { Footer } from "@/components/common/footer";
import { SITE_URL } from "@/config";
import { Blog, WithContext } from "schema-dts";

type CategoryLayoutProps = {
  category: string;
  site: Record<string, any>;
  url: string;
};

export function CategoryLayout({ category, site, url }: CategoryLayoutProps) {
  const jsonLd: WithContext<Blog> = {
    "@context": "https://schema.org",
    "@type": "Blog",
    author: {
      "@type": "Person",
      name: site?.author.name,
      url: `${SITE_URL}${url}`,
    },
  };

  return (
    <div className="w-full h-full max-w-2xl flex flex-col flex-1">
      <div className="flex-1 w-full px-5 @container">
        <BlogHeader border />
        <div className="h-full w-full flex flex-col justify-stretch items-center">
          <main className="w-full py-5">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ArticleList category={category} />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
