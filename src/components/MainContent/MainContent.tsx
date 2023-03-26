import { useSelector, useDispatch } from 'react-redux';
import { useGetAllNewsQuery } from 'store/newsApi';
import { RootState } from 'store/store';
import { newsPopupView } from 'store/popupView';
import { useNewsApiData } from 'hooks/useNewsApiData';

import NewsCardList from 'components/MainContent/NewsCardList/NewsCardList';
import Popup from 'components/common/Popup/Popup';
import NewsPopupContent from './NewsPopupContent/NewsPopupContent';
import styles from './styles.module.scss';

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
