import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { News } from 'models/news';
import styles from './styles.module.scss';

interface NewsCardProps extends News {
  onClick: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ urlToImage, publishedAt, title, source, onClick }) => {
  return (
    <button className={styles.newsCard} onClick={onClick}>
      <img src={urlToImage ? urlToImage : 'https://m.media-amazon.com/images/I/61ea3JvlmZL.jpg'} alt={'img'} />
      <span>{dayjs(publishedAt).format('DD-MM-YYYY')}</span>
      <h3>{title}</h3>
      {source && <span>{source.name}</span>}
    </button>
  );
};

export default NewsCard;
