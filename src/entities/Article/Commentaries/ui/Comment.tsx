import { FC, useState } from "react";
import { Comment } from "~widgets/Article";
import { Button, Card, CardGrid, Div, Text } from "@vkontakte/vkui";
import { InnerComment } from "./InnerComment.tsx";

import styles from "./comment.module.scss";
import { parseHtml } from "../models/parseHtml.tsx";

type Props = {
  comment: Comment;
};

export const SingleComment: FC<Props> = ({ comment }) => {
  const [areInnerCommentsOpen, setInnerCommentsOpen] = useState(false);

  return (
    <Card className={styles.comment}>
      <Div className={styles.author}>{comment.by}</Div>
      <Div>
        <Text>{parseHtml(comment?.text || "")}</Text>
        {comment?.kids?.length > 0 && (
          <Button appearance='neutral' onClick={() => setInnerCommentsOpen(!areInnerCommentsOpen)}>
            {areInnerCommentsOpen ? "Close" : "Open"} responses
          </Button>
        )}

        {comment?.kids?.length > 0 && areInnerCommentsOpen && (
          <CardGrid size='l'>
            {comment?.kids.map((commentId) => <InnerComment key={commentId} id={commentId} responseTo={comment.by} />)}
          </CardGrid>
        )}
      </Div>
    </Card>
  );
};
