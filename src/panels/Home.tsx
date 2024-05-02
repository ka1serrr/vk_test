import { FC } from "react";
import { Panel, PanelHeader, NavIdProps } from "@vkontakte/vkui";
import { Articles } from "~entities";

export interface HomeProps extends NavIdProps {}

const Home: FC<HomeProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Main page</PanelHeader>
      <Articles />
    </Panel>
  );
};

export default Home;
