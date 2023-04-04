import { ArticlesErrorResponse } from "./responses.types";
import { Article, ArticlesQueryParams, LayoutView } from "./types";

export interface TranslatorState {
  locale: string;
}

export interface ArticlesState {
  articles: Array<Article>;
  isLoading: boolean;
  focusedArticle: Article | null;
  params: ArticlesQueryParams;
  error: ArticlesErrorResponse | undefined;
  totalResults: number;
}

export interface LayoutViewState {
  layout: LayoutView;
}
