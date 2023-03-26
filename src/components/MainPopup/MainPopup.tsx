import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { mainPopupView } from 'store/popupView';
import Popup from 'components/common/Popup/Popup';
import styles from './styles.module.scss';

const MainPopup: React.FC = () => {
  const isPopupOpen = useSelector((state: RootState) => state.popupView.mainPopup);
  const dispatch = useDispatch();

  const handleClosePopup = () => {
    dispatch(mainPopupView(false));
  };

  return (
    <>
      {isPopupOpen ? (
        <Popup closePopup={handleClosePopup}>
          <div className={styles.contentPopup}>
            <h2>Difficulties</h2>
            <p>
              The most challenging aspect of the task was completing the application within the recommended 12-hour time
              frame, which proved too short for me to finish the tests and add the ability to change the language of the
              application.
            </p>
            <h2>The greatest joy</h2>
            <p>
              The most enjoyable part for me was building the project structure. It's something I'm constantly learning,
              and every new project allows me to improve those skills.
            </p>
          </div>
        </Popup>
      ) : null}
    </>
  );
};

export default MainPopup;
