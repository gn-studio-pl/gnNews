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
              The most difficult aspect of the task was completing the application within the recommended 12-hour
              timeframe, which turned out to be too short to refine details such as selecting appropriate fonts and
              icons, and so on.
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
