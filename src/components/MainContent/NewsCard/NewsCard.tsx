import dayjs from 'dayjs';
import { News } from 'models/news';
import styles from './styles.module.scss';
import {SUBSTITUTE_IMAGE} from 'constants/index'

interface NewsCardProps extends News {
  onClick: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ urlToImage, publishedAt, title, source, onClick }) => {
  return (
    <button className={styles.newsCard} onClick={onClick}>
      <img src={urlToImage ? urlToImage : SUBSTITUTE_IMAGE} alt={title} />
      <span>{dayjs(publishedAt).format('DD-MM-YYYY')}</span>
      <h3>{title}</h3>
      {source && <span>{source.name}</span>}
    </button>
  );
};

export default NewsCard;
