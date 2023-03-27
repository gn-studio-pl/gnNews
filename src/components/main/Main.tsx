import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getValue } from "../../features/newsCounter/newsCounter";
import { Card } from "./card/Card";
import "./main.css";

export interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description?: any;
  url: string;
  urlToImage?: any;
  publishedAt: string;
  content?: any;
}

export const Main = () => {
  const news = useLoaderData() as Article[];
  const newsLayoutState = useAppSelector(
    (state) => state.newsLayout.newsLayoutState
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getValue(news.length));
  }, []);

  return (
    <main className="main-content">
      <h2>Latest news</h2>
      <div
        className={
          newsLayoutState === "list" ? "news-layout-list" : "news-layout-tiles"
        }
      >
        {news.map((article, id) => (
          <Card key={id} article={article} />
        ))}
      </div>
    </main>
  );
};

export const newsLoader = async ({ params }: any) => {
  const { country } = params;
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`
  );

  const data = await res.json();
  if (data.articles.length === 0) {
    throw Error("Could not find news for this country");
  }

  const news = data.articles;

  return news;
};
