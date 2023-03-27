import { NavLink, useLocation } from "react-router-dom";
import "../styles/components/sidebar_style.scss";

import cardsIcon from "../assets/icons/cards.svg";
import { countries } from "../config/countries";

export const Sidebar = () => {
  const location = useLocation();

  const countryName = "POLAND";

  return (
    <aside>
      {countries.map((country) => (
        <NavLink key={country.code} to={`/country/${country.name}`}>
          <img src={cardsIcon} alt="flag" />
          {country.name.toUpperCase()}
        </NavLink>
      ))}
    </aside>
  );
};
