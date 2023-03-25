import React from 'react';
import SingleNews from './SingleNews.tsx/SingleNews';

const NewsContainer = ({ data }: any) => {
  return (
    <div className="mt-2 container border border-primary">
      <SingleNews data={data} />
    </div>
  );
};

export default NewsContainer;
