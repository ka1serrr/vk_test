import { FC } from "react";
import { useFetchComment } from "~entities";
import styles from "./comment.module.scss";
import { Card, Text } from "@vkontakte/vkui";
import { parseHtml } from "../models";

type Props = {
  id: number;
  responseTo: string;
};

export const InnerComment: FC<Props> = ({ id, responseTo }) => {
  const { comment } = useFetchComment(id);
  return (
    <>
      <Card className={styles.comment} mode='outline'>
        <div>Response to: {responseTo}</div>
        <div className={styles.author}>{comment?.by}</div>
        <div>
          <Text>{parseHtml(comment?.text || "")}</Text>
          {comment &&
            comment?.kids?.length > 0 &&
            comment?.kids.map((commentId) => <InnerComment key={commentId} id={commentId} responseTo={comment.by} />)}
        </div>
      </Card>
    </>
  );
};
