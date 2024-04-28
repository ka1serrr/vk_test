export type ArticlesIds = number[];

export type Article = {
  by: string;
  title: string;
  type: string;
  id: number;
  time: number;
  score: number;
  descendants: number;
};
