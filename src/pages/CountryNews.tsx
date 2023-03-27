import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "../components";
import { NewsCard, NewsListElement } from "../components/UI";
import { AppDispatch, RootState } from "../store";
import { getDataFromApi } from "../store/countryNews/CountryNewsSlice";

import "../styles/pages/country_news.scss";

type Props = {
  code: string;
};

export const CountryNews = ({ code }: Props) => {
  const news = useSelector((state: RootState) => {
    return state.news;
  });
  const switchBoolean = useSelector((state: RootState) => state.switch.isList);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getDataFromApi(code));
  }, [code, dispatch]);

  return (
    <Container>
      <div className={switchBoolean ? "all_news_list" : "all_news_cards"}>
        {news.loading ? (
          <p>Loading...</p>
        ) : switchBoolean ? (
          news.articles.map((element) => (
            <NewsListElement
              key={element.title}
              title={element.title}
              author={element.author}
              date={element.publishedAt}
              url={element.url}
            />
          ))
        ) : (
          news.articles.map((element) => (
            <NewsCard
              key={element.title}
              title={element.title}
              url={element.url}
              // urlToImage={element.urlToImage}
            />
          ))
        )}
      </div>
    </Container>
  );
};