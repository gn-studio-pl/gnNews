import React from 'react';
import dayjs from 'dayjs'
import { News } from 'models/news';
import styles from './styles.module.scss';
const NewsCard: React.FC<News> = ({ author, urlToImage, publishedAt, title }) => {
  return (
    <div className={styles.newsCard}>
      <img src={urlToImage ? urlToImage : 'https://m.media-amazon.com/images/I/61ea3JvlmZL.jpg'} alt={'img'}/>
      <small>{dayjs(publishedAt).format('DD-MM-YYYY')}</small>
      <h4>{title}</h4>
      <p>{author}</p>
    </div>
  );
};

export default NewsCard;
