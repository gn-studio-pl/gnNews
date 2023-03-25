import styles from './styles.module.scss';
import { News } from 'models/news';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';

const NewsPopupContent: React.FC<News> = ({ title }) => {
  return <div className={styles.newsPopup}>{title}</div>;
};

export default NewsPopupContent;
