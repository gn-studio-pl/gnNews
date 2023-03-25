import { useRef } from 'react';
import { mainPopupView } from 'store/popupView';
import useOnClickOutside from 'hooks/useOnClickOutside';
import styles from './styles.module.scss';
import { RootState } from 'store/store';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from 'components/common/IconButton/IconButton';
import { MdOutlineClose } from 'react-icons/md';

interface PopupProps {
  children: JSX.Element | JSX.Element[];
  closePopup: () => void
}

const Popup: React.FC<PopupProps> = ({ children, closePopup }) => {
  const refPopup = useRef(null);
  useOnClickOutside(refPopup, closePopup);

  return (
    <div className={styles.overlay}>
      <div className={styles.popup} ref={refPopup}>
        {children}
        <div className={styles.btnContainer}>
          <IconButton
            onClick={closePopup}
            title={'Zamknij popup'}
            icon={<MdOutlineClose fontSize={'1.5rem'} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
