import NewsCardList from 'components/MainContent/NewsCardList/NewsCardList';
import { useGetAllNewsQuery, useGetCountryNewsQuery } from 'store/newsApi';
import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store/store';
import { changeView } from 'store/newsView';

interface MainContentProps {
  view: string
}

const MainContent: React.FC = () => {
  const { data: allNews, error, isLoading } = useGetAllNewsQuery();
  const { data: countryNews } = useGetCountryNewsQuery('pl');
  const dispatch = useDispatch()
  const view = useSelector((state: RootState) => state.newsView.view)

  console.log(allNews);
  console.log(countryNews);
  console.log(view)

  return (
    <div className={styles.mainContent}>
      {error && <div>Error</div>}
      {isLoading ? <div>Loading...</div> : <NewsCardList data={allNews?.articles} view={view} />}
    </div>
  );
};

export default MainContent;
