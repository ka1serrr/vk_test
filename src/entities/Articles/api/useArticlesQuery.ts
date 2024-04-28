import { $fetch } from "~shared";
import { Article, ArticlesIds } from "../types";
import { useEffect, useState } from "react";
export const useFetchArticles = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<Article[] | []>([]);
  const [error, setError] = useState(false);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const articleIds = await $fetch.get<ArticlesIds>({
        path: `beststories.json?print=pretty&orderBy="$key"&limitToFirst=100`,
      });
      const articlePromises = articleIds.map(async (articleId) => {
        const articleResponse = await $fetch.get<Article>({ path: `item/${articleId}.json?print=pretty` });
        return articleResponse;
      });

      Promise.all(articlePromises).then((data) => setArticles((articles) => [...articles, ...data]));
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();

    const id = setInterval(() => fetchArticles(), 60000);

    return () => clearInterval(id);
  }, []);

  return { loading, error, articles, fetchArticles };
};
