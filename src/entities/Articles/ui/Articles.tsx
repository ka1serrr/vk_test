import { Button, Card, CardGrid, Div, Group, Header } from "@vkontakte/vkui";
import { useFetchArticles } from "../api";
import { useEffect } from "react";
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
            <Card className={styles.card}>
              <div>{article.title}</div>
            </Card>
          );
        })}
      </CardGrid>
    </Group>
  );
};
