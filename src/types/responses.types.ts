import { Article } from "./types";

export type ArticlesSuccesResponse = {
  status: string;
  totalResults: number;
  articles: Array<Article>;
};

export type ArticlesErrorResponse =
  | {
      status: string;
      code: string;
      message: string;
    }
  | undefined;
