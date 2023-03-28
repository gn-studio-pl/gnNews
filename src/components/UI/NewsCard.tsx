import React from "react";

import "../../styles/components/UI/news_card_style.scss";
import gnNews from "../../assets/icons/gnNews.svg";

type Props = {
  url: string;
  title: string;
  urlToImage?: File | string | undefined;
};

export const NewsCard = ({ url, title, urlToImage }: Props) => {
  const icon = urlToImage ? String(urlToImage) : gnNews;
  const imgClass = !urlToImage ? "gnNews" : "";

  return (
    <a className="card" href={url}>
      <img src={icon} alt="icon" className={imgClass} />

      <p>{title} </p>
    </a>
  );
};
