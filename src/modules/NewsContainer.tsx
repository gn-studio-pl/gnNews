import React from 'react';
import { Article } from '../types/types';
import NewsCarousel from './Carousel/NewsCarousel';
import SingleNews from './SingleNews.tsx/SingleNews';

type Props = {
  data: Article[];
};
const NewsContainer = ({ data }: Props) => {
  return (
    <div className="container bg-white py-5">
      <NewsCarousel data={data} />
      <SingleNews data={data} />
    </div>
  );
};

export default NewsContainer;
