import { NavLink } from "react-router-dom";
import "../styles/components/sidebar_style.scss";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { countries } from "../config/countries";

export const Sidebar = () => {
  return (
    <aside>
      {countries.map((country) => (
        <NavLink key={country.code} to={`/country/${country.name}`}>
          <span className={`fi fi-${country.code}`} />
          {country.name.toUpperCase()}
        </NavLink>
      ))}
    </aside>
  );
};
