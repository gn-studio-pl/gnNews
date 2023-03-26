import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store/store';
import { changeView } from 'store/newsView';
import { mainPopupView } from 'store/popupView';

import IconButton from 'components/common/IconButton/IconButton';
import Button from 'components/common/Button/Button';
import { MdViewModule, MdViewList } from 'react-icons/md';

import { TILES_VIEW, LIST_VIEW } from 'constants/index';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  const viewStyles = useSelector((state: RootState) => state.newsView.view);
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
      <Link to={`/`} id={styles.logo}>gnNews</Link>
      <div className={styles.headerActions}>
        <div className={styles.switches}>
          <IconButton
            onClick={handleTilesView}
            title={TILES_VIEW}
            icon={<MdViewModule fontSize={'1.5rem'} />}
            active={viewStyles === TILES_VIEW && true}
          />
          <IconButton
            onClick={handleListView}
            title={LIST_VIEW}
            icon={<MdViewList fontSize={'1.5rem'} />}
            active={viewStyles === LIST_VIEW && true}
          />
        </div>
        <Button title={'Popup'} onClick={handleOpenMainPopup} />
      </div>
    </header>
  );
};

export default Header;
