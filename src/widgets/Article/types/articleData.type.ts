import { Article } from "~entities";
import { CommonType } from "~shared";

export type ArticleData = Article & {
  kids: number[];
  url: string;
};

export type Comment = CommonType & {
  kids: number[];
  parent: number;
  type: "comment";
};
