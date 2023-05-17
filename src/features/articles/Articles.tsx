/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { isEmptyArray } from "../../helpers/isEmptyArray";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { AppDispatch } from "../../store";
import { getArticles } from "./articlesSlice";
import ListArticles from "./components/ListArticles";
import LoadingListArticles from "./components/LoadingListArticles";
import { useNavigate } from "react-router-dom";
import { navigatorLocale } from "../../config/translator.config";

const Articles = (): React.ReactElement => {
  const { isLoading, params, articles } = useAppSelector(
    (state) => state.articles
  );
  const navigate = useNavigate();

  const dispatch: AppDispatch = useAppDispatch();

  const handleFetchArticles = (): void => {
    dispatch(getArticles());
  };

  useEffect(() => {
    navigate(`/${navigatorLocale}`);
  }, []);

  useEffect(() => {
    handleFetchArticles();
  }, [params.country]);

  const isFirstFetched: boolean = isLoading && isEmptyArray(articles);

  return isFirstFetched ? <LoadingListArticles /> : <ListArticles />;
};

export default Articles;
