import parse from "html-react-parser";

export const parseHtml = (text: string) => {
  return parse(text);
};
