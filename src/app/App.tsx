import { View, SplitLayout, SplitCol } from "@vkontakte/vkui";
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";

import { DEFAULT_VIEW_PANELS } from "./routes.ts";
import { lazy } from "react";
const Home = lazy(() => import("~panels/Home"));

const ArticlePage = lazy(() => import("~panels/ArticlePage"));

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          <Home id='home' />
          <ArticlePage id='article' />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
