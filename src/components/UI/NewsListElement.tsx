import React from "react";

import "../../styles/components/UI/news_list_element_style.scss";

type Props = {
  title: string;
  author: string;
  date: Date;
  url: string;
};

export const NewsListElement = ({ title, author, date, url }: Props) => {
  return (
    <a className="element" href={url}>
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <p className="date">{`${date} | 12:00`}</p>
    </a>
  );
};
