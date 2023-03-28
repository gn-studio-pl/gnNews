import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import {
  fetchArticles,
  setNumberOfArticles,
} from "../../redux/features/articles";
import { Card } from "./card/Card";
import "./main.css";

export const Main = () => {
  const dispatch = useAppDispatch();
  const { country } = useParams();

  const news = useAppSelector((state) => state.articles);
  useEffect(() => {
    dispatch(fetchArticles(country));
    dispatch(setNumberOfArticles(news.articles.length));
  }, [country]);

  const newsLayoutState = useAppSelector(
    (state) => state.newsLayout.newsLayoutState
  );

  return (
    <main className="main-content">
      <h2>Latest news</h2>
      <div
        className={
          newsLayoutState === "list" ? "news-layout-list" : "news-layout-tiles"
        }
      >
        {news.loading && <div>Loading...</div>}
        {!news.loading && news.error ? <div>Error: {news.error}</div> : null}
        {!news.loading && news.articles.length
          ? news.articles.map((article, id) => (
              <Card key={id} article={article} />
            ))
          : null}
      </div>
    </main>
  );
};
