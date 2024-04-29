import { FC } from "react";
import { NavIdProps, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

export const Persik: FC<NavIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>Статья</PanelHeader>
    </Panel>
  );
};
