import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "../components";
import { NewsCard, NewsListElement } from "../components/UI";
import { AppDispatch } from "../store";
import { getDataFromApi } from "../store/countryNews/CountryNewsSlice";

import "../styles/pages/country_news.scss";

interface RootState {
  articles: [];
}

export const CountryNews = () => {
  const { articles, loading } = useSelector((state: RootState) => {
    return state.articles;
  });
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getDataFromApi("pl"));
  }, []);

  console.log("Articles", articles);

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <div className="all-news">
        <NewsListElement />
        <NewsCard />
      </div>
    </Container>
  );
};
