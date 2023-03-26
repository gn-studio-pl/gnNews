import { useRef } from 'react';
import useOnClickOutside from 'hooks/useOnClickOutside';
import IconButton from 'components/common/IconButton/IconButton';
import { MdOutlineClose } from 'react-icons/md';
import styles from './styles.module.scss';

interface PopupProps {
  children: JSX.Element | JSX.Element[];
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ children, closePopup }) => {
  const refPopup = useRef(null);
  useOnClickOutside(refPopup, closePopup);

  return (
    <div className={styles.overlay}>
      <div className={styles.popup} ref={refPopup}>
        {children}
        <div className={styles.btnContainer}>
          <IconButton onClick={closePopup} title={'Close popup'} icon={<MdOutlineClose fontSize={'1.5rem'} />} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
