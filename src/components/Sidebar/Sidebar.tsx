import styles from './styles.module.scss';
import NavLink from 'components/common/NavLink/NavLink';
import { countriesList } from 'db/countries';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { changeCountry } from 'store/countrySelector';
import {ALL_COUNTRIES} from 'constants/index'

const SideMenu: React.FC = () => {
  const dispatch = useDispatch();

  const handleSelectCountry = (key: string) => {
    dispatch(changeCountry(key));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.countryListContainer}>
        <NavLink
          path={`/`}
          onClick={() => handleSelectCountry(ALL_COUNTRIES)}
          title={'Wszystkie kraje'}
          icon={'https://www.svgrepo.com/show/6996/world.svg'}
        />
        {countriesList.map((country, index) => (
          <NavLink
            key={index}
            path={`/country/${encodeURIComponent(country.name)}`}
            onClick={() => handleSelectCountry(country.key)}
            title={country.name}
            icon={country.url}
          />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
