import { Comment } from "~widgets/Article";
import { FC, memo } from "react";
import { CardGrid, Group } from "@vkontakte/vkui";
import { SingleComment } from "./Comment.tsx";

type Props = {
  comments: Comment[] | undefined;
};

export const ArticleCommentaries: FC<Props> = memo(({ comments }) => {
  if (!comments) {
    return null;
  }

  return (
    <Group>
      <CardGrid size='l'>{comments?.map((comment) => <SingleComment comment={comment} key={comment.id} />)}</CardGrid>
    </Group>
  );
});
