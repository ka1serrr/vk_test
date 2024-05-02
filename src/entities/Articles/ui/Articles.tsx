import { Button, CardGrid, ContentCard, Div, Group, Header, Spinner } from "@vkontakte/vkui";
import { useFetchArticles } from "../api";
import dayjs from "dayjs";

import styles from "./article.module.scss";
import { Article } from "../types";
import { FC, memo } from "react";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { DEFAULT_VIEW_PANELS } from "~app";

type Props = {
  article: Article;
};

const ArticleItem: FC<Props> = memo(({ article }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <ContentCard
      onClick={() => routeNavigator.push(`/${DEFAULT_VIEW_PANELS.ARTICLE}/${article.id}`)}
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
});

export const Articles = memo(() => {
  const { articles, fetchArticles, loading } = useFetchArticles();

  console.log(loading);
  return (
    <Group
      header={
        <Header mode='primary' size='large'>
          Articles
        </Header>
      }
    >
      <Div>
        <Button stretched size='l' mode='outline' onClick={() => fetchArticles()}>
          Refresh articles
        </Button>
      </Div>

      <CardGrid size='l' aria-busy={loading}>
        <>
          {loading && <Spinner size='large' />}
          {articles?.map((article) => {
            return <ArticleItem article={article} key={article.id} />;
          })}
        </>
      </CardGrid>
    </Group>
  );
});
