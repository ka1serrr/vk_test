import { useEffect, useState } from "react";
import { Comment } from "~widgets/Article";
import { $fetch } from "~shared";

export const useFetchComment = (id: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [comment, setComment] = useState<Comment | null>(null);

  const fetchComments = async () => {
    try {
      setIsLoading(true);

      const response = await $fetch.get<Comment>({ path: `item/${id}.json?print=pretty` });

      await setComment(response);

      await setIsLoading(false);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [id]);

  return { fetchComments, comment, isLoading, error };
};
