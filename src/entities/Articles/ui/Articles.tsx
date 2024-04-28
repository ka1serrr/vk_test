import { Button, CardGrid, ContentCard, Div, Group, Header } from "@vkontakte/vkui";
import { useFetchArticles } from "../api";
import { useEffect } from "react";
import dayjs from "dayjs";

import styles from "./article.module.scss";

export const Articles = () => {
  const { articles } = useFetchArticles();
  useEffect(() => {
    console.log(articles);
  }, [articles]);

  return (
    <Group
      header={
        <Header mode='primary' size='large'>
          Статьи
        </Header>
      }
    >
      <Div>
        <Button stretched size='l' mode='outline'>
          Обновить статьи
        </Button>
      </Div>

      <CardGrid size='l'>
        {articles?.map((article) => {
          return (
            <ContentCard
              key={article.id}
              caption={
                <div className={styles.caption}>
                  <span>Likes: {article.score}</span>
                  <span>Date: {dayjs.unix(article.time).format("DD MMMM YYYY")}</span>
                </div>
              }
              className={styles.card}
              header={article.title}
              subtitle={`Author: ${article.by}`}
            />
          );
        })}
      </CardGrid>
    </Group>
  );
};
