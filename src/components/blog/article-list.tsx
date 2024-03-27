import React from "react";

import { ArticleBox } from "./article-box";
import { router } from "@/router";

type ArticleListProps = {
  category: string;
};

export async function ArticleList({ category }: ArticleListProps) {
  const articles =
    category != "all"
      ? await router.getArticlesByCategory(category)
      : await router.getArticles();

  let currentDate: Date | null = null;

  return (
    <main className="w-full grid grid-cols-1 gap-x-4 gap-y-8 mt-4">
      {articles?.length === 0 && (
        <div className="w-full text-center col-span-2">
          <h1 className="text-2xl font-bold font-source-serif mt-10">
            No articles here at the moment
          </h1>
        </div>
      )}
      {articles?.map((article, i) => {
        const date = new Date(article.publishedAt);
        let header = null;

        // if different month, show month and year
        if (!currentDate || currentDate.getMonth() !== date.getMonth()) {
          currentDate = date;
          const dateValue = date.toLocaleString("default", {
            month: "long",
            year: "numeric",
          });
          header = (
            <h1 className="text-xl font-bold font-roboto-condensed mt-3 mb-3">
              {dateValue}
            </h1>
          );
        }

        return (
          <React.Fragment key={i}>
            {header}
            <ArticleBox
              key={article.url}
              title={article.title}
              description={article.description}
              category={category === "all" ? article.category : null}
              publishedAt={article.publishedAt}
              url={article.url}
            />
          </React.Fragment>
        );
      })}
    </main>
  );
}
