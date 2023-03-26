import { useDispatch } from 'react-redux'
import {newsPopupView} from 'store/popupView';
import { setCurrentNews } from 'store/currentNews';
import { News } from 'models/news';
import NewsCard from 'components/MainContent/NewsCard/NewsCard';
import { TILES_VIEW } from 'constants/index';
import styles from './styles.module.scss';

interface NewsCardListProps {
  data: News[] | undefined;
  view: string;
}

const NewsCardList: React.FC<NewsCardListProps> = ({ data, view }) => {
  const dispatch = useDispatch()
  
  const handleOpenNews = (news: News) => {
    dispatch(newsPopupView(true));
    dispatch(setCurrentNews(news))
  }

  return (
    <div className={view === TILES_VIEW ? styles.newsViewTiles : styles.newsViewList}>
      {/* For visual purposes, the order of the array was reversed because the first elements did not contain any images */}
      {data
        ?.slice()
        .reverse()
        .map((news) => (
          <NewsCard
            onClick={() => handleOpenNews(news)}
            key={news.url}
            publishedAt={news.publishedAt}
            urlToImage={news.urlToImage}
            title={news.title}
            source={news.source}
          />
        ))}
    </div>
  );
};

export default NewsCardList;
