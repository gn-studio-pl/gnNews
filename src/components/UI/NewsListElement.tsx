import React from "react";

import "../../styles/components/UI/news_list_element_style.scss";

export const NewsListElement = () => {
  return (
    <div className="element">
      <p className="title">Tytuł artykułu</p>
      <p className="author">Autor artykułu</p>
      <p className="date">23.03.2023 | 12:00</p>
    </div>
  );
};
