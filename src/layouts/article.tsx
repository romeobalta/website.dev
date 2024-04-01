import { ArticleInfo } from "@/components/blog/article-info";
import { BlogHeader } from "@/components/blog/blog-header";
import { Footer } from "@/components/common/footer";
import { SITE_IMAGE, SITE_URL } from "@/config";
import { ReadTimeResults } from "reading-time";
import { BlogPosting, WithContext } from "schema-dts";

type ArticleLayoutProps = {
  title: string;
  publishedAt: string;
  category: string;
  readingTime: ReadTimeResults;
  url: string;
  site: Record<string, any>;
  children: React.ReactNode;
};

export function ArticleLayout({
  children,
  title,
  publishedAt,
  category,
  site,
  url,
  readingTime,
}: ArticleLayoutProps) {
  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: SITE_IMAGE,
    author: {
      "@type": "Person",
      name: site?.author.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: site?.author.name,
      url: SITE_URL,
    },
    datePublished: publishedAt,
    dateCreated: publishedAt,
    url: `${SITE_URL}${url}`,
  };

  return (
    <div className="w-full h-full max-w-2xl flex flex-col flex-1 px-5 @container">
      <BlogHeader border />

      <div className="h-full w-full flex flex-col flex-1 justify-stretch items-center">
        <main className="w-full">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <article className="flex-1 flex flex-col items-center w-full h-full">
            <h1 className="font-source-serif font-black text-[6cqw] leading-[8cqw] mt-6 mb-1 w-full max-w-2xl">
              {title}
            </h1>

            <ArticleInfo
              className="mb-6"
              name={category}
              slug={category}
              date={new Date(publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
              readingTime={`~ ${Math.round(readingTime.minutes)} min`}
            />
            <div className="w-full text-base leading-7 font-roboto article-body">
              {children}
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}
