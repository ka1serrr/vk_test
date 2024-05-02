import { useEffect, useState } from "react";
import { $fetch } from "~shared";
import { ArticleData, Comment } from "~widgets/Article";

export const useFetchArticleData = (id: string | undefined) => {
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState<ArticleData | undefined>(undefined);
  const [error, setError] = useState(false);

  const [comments, setComments] = useState<Comment[] | undefined>(undefined);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [commentsError, setCommentsError] = useState(false);

  const fetchArticle = async () => {
    setLoading(true);
    try {
      const articleData = await $fetch.get<ArticleData>({
        path: `item/${id}.json?print=pretty`,
      });

      await setArticle(articleData);

      return articleData;
    } catch (e) {
      setError(true);
    }
  };

  const fetchComments = async () => {
    try {
      if (article && article?.kids?.length > 0) {
        setCommentsLoading(true);
        const commentsPromises = article.kids.map(async (commentId) => {
          return await $fetch.get<Comment>({ path: `item/${commentId}.json?print=pretty` });
        });

        Promise.all(commentsPromises)
          .then((data) => setComments(data))
          .then(() => setCommentsLoading(false));
      }
    } catch (e) {
      setCommentsError(true);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [id]);

  useEffect(() => {
    if (article) {
      fetchComments();
    }
  }, [article]);

  return { loading, error, article, fetchArticle, comments, fetchComments, commentsError, commentsLoading };
};
