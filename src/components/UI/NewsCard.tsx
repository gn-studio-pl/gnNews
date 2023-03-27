import React from "react";

import "../../styles/components/UI/news_card_style.scss";

type Props = {
  url: string;
  title: string;
  urlToImage?: File | undefined;
};

export const NewsCard = ({ url, title, urlToImage }: Props) => {
  return (
    <a className="card" href={url}>
      {/* <img src={urlToImage} alt="icon" /> */}
      <p>{title} </p>
    </a>
  );
};
