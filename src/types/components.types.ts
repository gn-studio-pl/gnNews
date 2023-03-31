import { ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { Article, Country, LayoutView } from "./types";

export type WrapperProps = {
  children?: ReactNode;
  style?: CSSProperties;
  onChange?: React.FormEventHandler<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type SuspenseWrapperProps = {
  loadingComponent: ReactNode | string;
} & WrapperProps;

export type IconLayoutProps = {
  type: LayoutView;
};

export type PopupProps = {
  swapActive: React.MouseEventHandler<HTMLDivElement>;
  popupContent: ReactNode;
};

export type IconLangProps = {
  swapLang: React.MouseEventHandler<HTMLDivElement>;
};

export type ListArticlesProps = {
  articles?: Array<Article>;
};

export type ArticleProps = {
  article: Article;
};

export type NavCountryProps = {
  navElement: Country;
};

export type PopupArticleProps = {
  article: Article;
};

export type LinkArticleProps = {
  href: string;
};

export type TitleProps = {
  type: "H1" | "H2" | "H3";
  idText?: string;
  defaultMessage?: string;
  stylesBox?: CSSProperties;
  stylesH?: CSSProperties;
  children?: React.ReactNode;
};

export type ImageArticleProps = {
  src: string | null;
};

export type PublishedAtArticleProps = {
  publishedAt: string;
};
