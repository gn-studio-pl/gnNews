import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
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
  const { country } = useParams();

  const news = useLoaderData() as Article[];

  return (
    <main className="main-content">
      <h2>
        {country ? (
          <div>Latest news</div>
        ) : (
          <div>
            Click on links to check for latest news from selected countries
          </div>
        )}
      </h2>
      {country && (
        <div className="news-layout-list">
          {news.map((article, id) => (
            <div key={id}>
              <Card article={article} />
            </div>
          ))}
        </div>
      )}
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

  if (!res.ok) {
    throw Error("Could not find news for this country");
  }

  const data = await res.json();
  const news = data.articles;

  return news;
};
