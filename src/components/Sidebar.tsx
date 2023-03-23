import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/components/sidebar_style.scss";

import cardsIcon from "../assets/icons/cards.svg";

export const Sidebar = () => {
  const location = useLocation();

  const countryName = "POLAND";

  return (
    <aside>
      {/* <NavLink to="/">Sidebar</NavLink> */}
      <NavLink
        to={`/country/${countryName}`}
        // className={location.pathname === countryName ? "active" : ""}
      >
        <img src={cardsIcon} alt="flag" />
        {countryName}
      </NavLink>
    </aside>
  );
};
