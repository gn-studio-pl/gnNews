import NewsCardList from 'components/MainContent/NewsCardList/NewsCardList';
import { useGetAllNewsQuery } from 'store/newsApi';
import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import Popup from 'components/Popup/Popup';
import NewsPopupContent from './NewsPopupContent/NewsPopupContent';
import { newsPopupView } from 'store/popupView';
import { useNewsApiData } from 'hooks/useNewsApiData';

const MainContent: React.FC = () => {
  const dispatch = useDispatch();
  const view = useSelector((state: RootState) => state.newsView.view);
  const isNewsPopupOpen = useSelector((state: RootState) => state.popupView.newsPopup);
  const { error, isLoading } = useGetAllNewsQuery();
  const newsData = useNewsApiData();

  const handleCloseNewsPopup = () => {
    dispatch(newsPopupView(false));
  };

  return (
    <div className={styles.mainContent}>
      {error && <div>Error</div>}
      {isLoading ? <div>Loading...</div> : <NewsCardList data={[]} view={view} />}
      {isNewsPopupOpen ? (
        <Popup closePopup={handleCloseNewsPopup}>
          <NewsPopupContent />
        </Popup>
      ) : null}
    </div>
  );
};

export default MainContent;
