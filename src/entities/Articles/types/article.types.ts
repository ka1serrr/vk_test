import { CommonType } from "~shared";

export type ArticlesIds = number[];

export type Article = CommonType & {
  score: number;
  title: string;
  descendants: number;
};
