import React from 'react';
import { News } from 'models/news';
import NewsCard from 'components/MainContent/NewsCard/NewsCard';
import styles from './styles.module.scss';
import { TILES_VIEW } from 'constants/index';

interface NewsCardListProps {
  data: News[] | undefined;
  view: string;
}

const NewsCardList: React.FC<NewsCardListProps> = ({ data, view }) => {
  console.log(view)
  return (
    <div className={view === TILES_VIEW ? styles.newsViewTiles : styles.newsViewList}>
      {data
        ?.slice()
        .reverse()
        .map((news) => (
          <NewsCard key={news.url} author={news.author} urlToImage={news.urlToImage} title={news.title} />
        ))}
    </div>
  );
};

export default NewsCardList;
