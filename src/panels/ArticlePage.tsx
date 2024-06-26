import { FC } from "react";
import { NavIdProps, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { Article } from "~widgets/Article";

const ArticlePage: FC<NavIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>Article</PanelHeader>
      <Article />
    </Panel>
  );
};

export default ArticlePage;
