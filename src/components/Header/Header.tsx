import { changeView } from 'store/newsView';
import { mainPopupView } from 'store/popupView';
import styles from './styles.module.scss';
import { TILES_VIEW, LIST_VIEW } from 'constants/index';
import IconButton from 'components/common/IconButton/IconButton';
import { MdViewModule, MdViewList } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import Button from 'components/common/Button/Button';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const view = useSelector((state: RootState) => state.newsView.view);
  const dispatch = useDispatch();

  const handleListView = () => {
    dispatch(changeView(LIST_VIEW));
  };

  const handleTilesView = () => {
    dispatch(changeView(TILES_VIEW));
  };

  const handleOpenMainPopup = () => {
    dispatch(mainPopupView(true));
  };

  return (
    <header className={styles.header}>
      <Link to={`/`}>
        <h1>gnNews</h1>{' '}
      </Link>
      <div className={styles.headerActions}>
        <div className={styles.switches}>
          <IconButton
            onClick={handleTilesView}
            title={TILES_VIEW}
            icon={<MdViewModule fontSize={'1.5rem'} />}
            active={view === TILES_VIEW && true}
          />
          <IconButton
            onClick={handleListView}
            title={LIST_VIEW}
            icon={<MdViewList fontSize={'1.5rem'} />}
            active={view === LIST_VIEW && true}
          />
        </div>
        <Button title={'Popup'} onClick={handleOpenMainPopup} />
      </div>
    </header>
  );
};

export default Header;
