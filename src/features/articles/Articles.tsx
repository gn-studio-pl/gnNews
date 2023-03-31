import React, { useEffect } from "react";
import { isEmptyArray } from "../../helpers/isEmptyArray";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { AppDispatch } from "../../store";
import { getArticles } from "./articlesSlice";
import ListArticles from "./components/ListArticles";
import LoadingListArticles from "./components/LoadingListArticles";

const Articles = (): React.ReactElement => {
  const { isLoading, params, articles } = useAppSelector(
    (state) => state.articles
  );

  const dispatch: AppDispatch = useAppDispatch();

  const handleFetchArticles = (): void => {
    dispatch(getArticles());
  };

  useEffect(() => {
    handleFetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.country]);

  const isFirstFetched: boolean = isLoading && isEmptyArray(articles);

  return isFirstFetched ? <LoadingListArticles /> : <ListArticles />;
};

export default Articles;
