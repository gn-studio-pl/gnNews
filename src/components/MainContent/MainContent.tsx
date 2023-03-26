import NewsCardList from 'components/MainContent/NewsCardList/NewsCardList';
import { useLocation } from 'react-router-dom';
import { useGetAllNewsQuery, useGetCountryNewsQuery } from 'store/newsApi';
import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import Popup from 'components/Popup/Popup';
import NewsPopupContent from './NewsPopupContent/NewsPopupContent';
import { newsPopupView } from 'store/popupView';
import { ALL_COUNTRIES } from 'constants/index';

interface MainContentProps {
  view: string;
}

const MainContent: React.FC = () => {
  const dispatch = useDispatch();
  const view = useSelector((state: RootState) => state.newsView.view);
  const isNewsPopupOpen = useSelector((state: RootState) => state.popupView.newsPopup);
  const selectedCountry = useSelector((state: RootState) => state.countrySelector.key);
  const { data: allNews, error, isLoading } = useGetAllNewsQuery();
  const { data: countryNews } = useGetCountryNewsQuery(selectedCountry);

  const handleCloseNewsPopup = () => {
    dispatch(newsPopupView(false));
  };

  console.log(selectedCountry);

  return (
    <div className={styles.mainContent}>
      {error && <div>Error</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <NewsCardList
          //data={[]}
           data={selectedCountry === ALL_COUNTRIES ? allNews?.articles : countryNews?.articles}
          view={view}
        />
      )}
      {isNewsPopupOpen ? (
        <Popup closePopup={handleCloseNewsPopup}>
          <NewsPopupContent />
        </Popup>
      ) : null}
    </div>
  );
};

export default MainContent;
