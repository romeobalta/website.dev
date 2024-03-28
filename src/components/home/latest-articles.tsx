import { router } from "@/router";
import { ArticleBox } from "../blog/article-box";
import { Section } from "./section";

type LatestArticlesProps = {
  count?: number;
};

export async function LatestArticles({ count = 5 }: LatestArticlesProps) {
  const articles = router.getArticles(count);

  return (
    !!articles?.length && (
      <Section title="Latest articles">
        <div className="w-full grid grid-cols-1 gap-x-4 gap-y-8 mt-4">
          {articles?.map((article) => (
            <ArticleBox
              key={article.url}
              title={article.title}
              description={article.description}
              category={article.category}
              url={article.url}
              publishedAt={article.publishedAt}
            />
          ))}
        </div>
      </Section>
    )
  );
}
