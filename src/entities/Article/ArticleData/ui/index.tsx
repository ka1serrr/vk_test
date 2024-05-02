import { ArticleData } from "~widgets/Article";
import { FC } from "react";
import { Card, Div, Group, Header, Link, Separator } from "@vkontakte/vkui";
import styles from "./articleInfo.module.scss";
import dayjs from "dayjs";

type Props = {
  article: ArticleData | undefined;
};

export const ArticleInfo: FC<Props> = ({ article }) => {
  return (
    <Group>
      <Card>
        <Header size='large'>{article?.title}</Header>
        <Div className={styles.author}>Author: {article?.by}</Div>
        <Separator />
        <Div className={styles.mainData}>
          <Link href={article?.url}>Full Text</Link>
          <span>Date: {dayjs.unix(article?.time || 100).format("DD MMMM YYYY")}</span>
          <span>Comments: {article?.kids?.length || 0}</span>
        </Div>
      </Card>
    </Group>
  );
};
