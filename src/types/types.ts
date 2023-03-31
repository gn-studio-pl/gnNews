import { MessageFormatElement } from "react-intl";
import { ArticlesErrorResponse } from "./responses.types";

export interface TranslatorState {
  locale: string;
}

export type LangMessages =
  | Record<string, string>
  | Record<string, MessageFormatElement[]>
  | undefined;

export interface ArticlesState {
  articles: Array<Article>;
  isLoading: boolean;
  focusedArticle: Article | null;
  params: ArticlesQueryParams;
  error: ArticlesErrorResponse | undefined;
  totalResults: number;
}

export type Article = {
  source: Source;
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export type Source = {
  id: string;
  name: string;
};

export type ArticlesQueryParams = {
  country: string;
  pageSize?: number;
  page: number;
  category?:
    | "business"
    | "entertainment"
    | "general"
    | "health"
    | "science"
    | "sports"
    | "technology";
  q?: string;
};

export type Country = {
  id: number;
  nameCountry: string;
  country: string;
};

export interface LayoutViewState {
  layout: LayoutView;
}

export type LayoutView = "list" | "tiles";
