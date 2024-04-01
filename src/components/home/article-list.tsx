import { PropsOf } from "@/util";
import { ArticleBox } from "../blog/article-box";

export function ArticleList() {
  const articles: PropsOf<typeof ArticleBox>[] = [];

  return (
    !!articles?.length && (
      <>
        <h1 className="w-full max-w-md my-8 text-2xl font-bold text-center font-source-serif">
          Latest articles
        </h1>

        <div className="w-full grid grid-cols-1 gap-x-4 gap-y-8 mt-4">
          {articles?.map((article) => (
            <ArticleBox
              key={article.slug}
              title={article.title}
              description={article.description}
              category={article.category}
              slug={article.slug}
              publishedAt={article.publishedAt}
            />
          ))}
        </div>
      </>
    )
  );
}
