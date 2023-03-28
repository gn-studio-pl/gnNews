import React from 'react';
import { Article } from '../types/types';
import SingleNews from './SingleNews.tsx/SingleNews';

type Props = {
  data: Article[];
};
const NewsContainer = ({ data }: Props) => {
  return (
    <div className="mt-3 py-4 ps-4 container d-flex flex-column align-items-start">
      <SingleNews data={data} />
    </div>
  );
};

export default NewsContainer;
