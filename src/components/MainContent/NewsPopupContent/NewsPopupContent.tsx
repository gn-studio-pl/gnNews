import styles from './styles.module.scss';
import { News } from 'models/news';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';

const substituteImage = 'https://m.media-amazon.com/images/I/61ea3JvlmZL.jpg';

const NewsPopupContent: React.FC = () => {
  const currentNews = useSelector((state: RootState) => state.currentNews.news);
  const { title, urlToImage, publishedAt, url, description, content, author, source } = currentNews;

  return (
    <div className={styles.newsPopupContent}>
      <div
        className={styles.urlImage}
        style={{ backgroundImage: `url(${urlToImage ? urlToImage : substituteImage})` }}
      />
      <div className={styles.content}>
        <span>Data publikacji: {dayjs(publishedAt).format('DD-MM-YYYY')}</span>
        <h4>Zródło: {source && source.name}</h4>
        <h3>{title}</h3>
        <p>{description && description}</p>
        <p>{content}</p>
        <span>Autor: {author && author}</span>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          Przejdz do artykułu
        </a>
      </div>
    </div>
  );
};

export default NewsPopupContent;
