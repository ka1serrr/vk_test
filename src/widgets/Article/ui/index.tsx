import { ArticleInfo, ArticleCommentaries } from "~entities";
import { useFetchArticleData } from "~widgets/Article";
import { useParams } from "@vkontakte/vk-mini-apps-router";
import { Button, Div, Header, Spinner } from "@vkontakte/vkui";

export const Article = () => {
  const params = useParams<"id">();

  const { comments, article, loading, commentsLoading, error, fetchComments } = useFetchArticleData(params?.id);

  if (error) {
    return <Header mode='primary'>An error occurred</Header>;
  }

  return (
    <Div>
      {loading && !article ? <Spinner size='large' /> : <ArticleInfo article={article} />}

      <Button stretched size='l' disabled={commentsLoading || !article} onClick={() => fetchComments()}>
        Refresh comments
      </Button>
      {article && commentsLoading ? <Spinner size='large' /> : <ArticleCommentaries comments={comments} />}
    </Div>
  );
};
