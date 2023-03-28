import React from 'react';

import { Article } from '../../types/types';
import Tile from './Tile';

type Props = {
  data: Article[];
};
const SingleNews = ({ data }: Props) => {
  const reduxFunctionality = true;

  const listContent = () => {
    return (
      data &&
      data.map((news) => {
        return (
          <li className="list-group-item">
            <p className="mb-1">{news.publishedAt.replace(/T|Z/g, ' ').slice(0, 16)}</p>
            <a href={news.url}>{news.title}</a>
          </li>
        );
      })
    );
  };

  const tileContent = () => {
    return (
      data &&
      data.map((news) => {
        return <Tile news={news} />;
      })
    );
  };

  return reduxFunctionality ? (
    <div className="container d-flex justify-content-center flex-wrap">{tileContent()}</div>
  ) : (
    <ul className="list-group">{listContent()}</ul>
  );
};

export default SingleNews;
