import NewsCardList from 'components/MainContent/NewsCardList/NewsCardList';
import { useGetAllNewsQuery, useGetCountryNewsQuery } from 'store/newsApi';
import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import Popup from 'components/Popup/Popup';
import NewsPopupContent from './NewsPopupContent/NewsPopupContent';
import { newsPopupView } from 'store/popupView';

interface MainContentProps {
  view: string;
}

const MainContent: React.FC = () => {
  const { data: allNews, error, isLoading } = useGetAllNewsQuery();
  const { data: countryNews } = useGetCountryNewsQuery('pl');
  const dispatch = useDispatch();
  const view = useSelector((state: RootState) => state.newsView.view);
  const isNewsPopupOpen = useSelector((state: RootState) => state.popupView.newsPopup);
  const currentNews = useSelector((state: RootState) => state.currentNews.news)

  const handleCloseNewsPopup = () => {
    dispatch(newsPopupView(false));
  };

  return (
    <div className={styles.mainContent}>
      {error && <div>Error</div>}
      {isLoading ? <div>Loading...</div> : <NewsCardList data={allNews?.articles} view={view} />}
      {isNewsPopupOpen ? (
        <Popup closePopup={handleCloseNewsPopup}>
          <NewsPopupContent title={currentNews.title}/>
        </Popup>
      ) : null}
    </div>
  );
};

export default MainContent;
