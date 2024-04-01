import { router } from "@/router";
import { ArticleBox } from "../blog/article-box";
import { Section } from "./section";

export async function LatestArticles() {
  const articles = await router.getArticles();

  return (
    !!articles?.length && (
      <Section heading="Latest articles">
        <div className="w-full grid grid-cols-1 gap-x-4 gap-y-8 mt-4">
          {articles?.map((article) => (
            <ArticleBox
              key={article.slug}
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
