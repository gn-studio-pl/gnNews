import React from "react";

import "../../styles/components/UI/news_card_style.scss";
import gnNews from "../../assets/icons/gnNews.svg";
import { useDispatch } from "react-redux";
import { ADD_ARTICLE, CHANGE_IS_OPEN } from "../../store/modal/modalSlice";

type Props = {
  url: string;
  title: string;
  urlToImage?: File | string | undefined;
  author: string;
};

export const NewsCard = ({ title, urlToImage, url, author }: Props) => {
  const dispatch = useDispatch();

  const icon = urlToImage ? String(urlToImage) : gnNews;
  const imgClass = !urlToImage ? "gnNews" : "";

  const openModal = () => {
    dispatch(CHANGE_IS_OPEN());
    dispatch(ADD_ARTICLE({ title: title, author: author, url: url }));
    console.log("click");
  };

  return (
    <div className="card" onClick={openModal}>
      <img src={icon} alt="icon" className={imgClass} />
      <p>{title} </p>
    </div>
  );
};
