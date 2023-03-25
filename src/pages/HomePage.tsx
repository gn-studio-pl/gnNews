import { useGetAllNewsQuery, useGetCountryNewsQuery } from '../store/newsApi';
import {useState} from 'react'
import Header from 'components/Header/Header';
import SideMenu from 'components/Sidebar/Sidebar';
import MainContent from 'components/MainContent/MainContent';
import Footer from 'components/Footer/Footer';
import styles from './styles.module.scss';
import Popup from 'components/Popup/Popup';
const HomePage: React.FC = () => {
  const { data: allNews, error, isLoading } = useGetAllNewsQuery();
  const { data: countryNews } = useGetCountryNewsQuery('pl');
  const [view, setView] = useState()


  console.log(allNews);
  console.log(countryNews);

  return (
    <div className={styles.homePage}>
      <Header />
      <main>
        <SideMenu />
        <MainContent />
      </main>
      <Footer />
      <Popup><div>wszystko gra</div></Popup>
    </div>
  );
};

export default HomePage;
