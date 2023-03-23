import React, { useState } from "react";
import { Article } from "../Main";
import "./card.css";

interface CardProps {
  article: Article;
}

export const Card = ({ article }: CardProps) => {
  const [listLayout, setListLayout] = useState(true);

  return (
    <div className="card-list">
      <h3>
        {listLayout ? (
          <>
            {article.title.slice(0, 70)}
            {article.title.length > 70 && <span>..</span>}
          </>
        ) : (
          <>
            {article.title.slice(0, 30)}
            {article.title.length > 30 && <span>..</span>}
          </>
        )}
      </h3>
      <p>{article.author}</p>
      <p>{article.publishedAt.slice(0, 10)}</p>
      {!listLayout && (
        <>
          {article.urlToImage ? (
            <img src={article.urlToImage} alt="article photo" />
          ) : (
            <img
              src="/public/image-not-found-1-scaled.png"
              alt="no image found"
            />
          )}
          <p>{article.title.slice(31, 100)}</p>
        </>
      )}
    </div>
  );
};
