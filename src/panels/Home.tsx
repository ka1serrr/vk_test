import { FC } from 'react';
import {
  Panel,
  PanelHeader,
  NavIdProps,
} from '@vkontakte/vkui';
import { Articles } from "~entities";

export interface HomeProps extends NavIdProps {
}

export const Home: FC<HomeProps> = ({ id }) => {

  return (
    <Panel id={id}>
      <PanelHeader>Главная</PanelHeader>
      <Articles/>
    </Panel>
  );
};
