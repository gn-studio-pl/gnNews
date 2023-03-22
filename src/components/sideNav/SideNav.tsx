import React from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./sideNav.css";
import { NavLink } from "react-router-dom";
import CountryRoute from "./countryRoute/CountryRoute";

export const SideNav = () => {
  return (
    <nav className="side-nav">
      <ul>
        <NavLink to="/country/poland">
          <CountryRoute country="Poland" flag="pl" />
        </NavLink>
        <NavLink to="/country/argentina">
          <CountryRoute country="Argentina" flag="ar" />
        </NavLink>
        <NavLink to="/country/belgium">
          <CountryRoute country="Belgium" flag="be" />
        </NavLink>
        <NavLink to="/country/canada">
          <CountryRoute country="Canada" flag="ca" />
        </NavLink>
        <NavLink to="/country/japan">
          <CountryRoute country="Japan" flag="jp" />
        </NavLink>
      </ul>
    </nav>
  );
};
