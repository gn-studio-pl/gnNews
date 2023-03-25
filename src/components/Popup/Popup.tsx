import { useRef } from 'react';
import { popupView } from 'store/popupView';
import useOnClickOutside from 'hooks/useOnClickOutside';
import Button from 'components/common/Button/Button';
import styles from './styles.module.scss';
import { RootState } from 'store/store';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from 'components/common/IconButton/IconButton';
import { MdOutlineClose } from 'react-icons/md';

interface PopupProps {
  children: JSX.Element | JSX.Element[];
}

const Popup: React.FC<PopupProps> = ({ children }) => {
  const isOpen = useSelector((state: RootState) => state.popupView.isOpen);
  const dispatch = useDispatch();
  const refPopup = useRef(null);
  const handleClosePopup = () => {
    dispatch(popupView(false));
  };
  useOnClickOutside(refPopup, handleClosePopup);
  console.log(isOpen);

  return isOpen ? (
    <div className={styles.overlay}>
      <div className={styles.popup} ref={refPopup}>
        {children}
        <div className={styles.btnContainer}>
          <IconButton
            onClick={handleClosePopup}
            title={'Zamknij popup'}
            icon={<MdOutlineClose fontSize={'1.5rem'} />}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;
