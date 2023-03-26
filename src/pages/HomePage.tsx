import Header from 'components/Header/Header';
import SideMenu from 'components/Sidebar/Sidebar';
import MainContent from 'components/MainContent/MainContent';
import Footer from 'components/Footer/Footer';
import styles from './styles.module.scss';
import Popup from 'components/Popup/Popup';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { mainPopupView } from 'store/popupView';

const HomePage: React.FC = () => {
  const isPopupOpen = useSelector((state: RootState) => state.popupView.mainPopup);
  const dispatch = useDispatch();

  const handleClosePopup = () => {
    dispatch(mainPopupView(false));
  };

  return (
    <div className={styles.homePage}>
      <Header />
      <main>
        <SideMenu />
        <MainContent />
      </main>
      <Footer />
      {isPopupOpen ? (
        <Popup closePopup={handleClosePopup}>
          <div>wszystko gra</div>
        </Popup>
      ) : null}
    </div>
  );
};

export default HomePage;
