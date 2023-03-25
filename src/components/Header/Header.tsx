import { changeView } from 'store/newsView';
import styles from './styles.module.scss';
import { TILES_VIEW, LIST_VIEW } from 'constants/index';
import Button from 'components/common/Button/Button';
import { MdViewModule, MdViewList } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { useState } from 'react';

const Header: React.FC = () => {
  const view = useSelector((state: RootState) => state.newsView.view);
  const dispatch = useDispatch();

  const handleListView = () => {
    dispatch(changeView(LIST_VIEW));
  };
  const handleTilesView = () => {
    dispatch(changeView(TILES_VIEW));
  };

  return (
    <header className={styles.header}>
      <div>logo</div>
      <div className={styles.switches}>
        <Button
          onClick={handleListView}
          title={LIST_VIEW}
          icon={<MdViewList fontSize={'1.5rem'} />}
          active={view === LIST_VIEW && true}
        />
        <Button
          onClick={handleTilesView}
          title={TILES_VIEW}
          icon={<MdViewModule fontSize={'1.5rem'} />}
          active={view === TILES_VIEW && true}
        />
      </div>
    </header>
  );
};

export default Header;
