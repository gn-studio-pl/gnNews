import React from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./sideNav.css";
import { NavLink } from "react-router-dom";
import CountryRoute from "./countryRoute/CountryRoute";

export const SideNav = () => {
  return (
    <nav className="side-nav">
      <ul>
        <NavLink to="/country/pl">
          <CountryRoute country="poland" flag="pl" />
        </NavLink>
        <NavLink to="/country/ar">
          <CountryRoute country="argentina" flag="ar" />
        </NavLink>
        <NavLink to="/country/be">
          <CountryRoute country="belgium" flag="be" />
        </NavLink>
        <NavLink to="/country/ca">
          <CountryRoute country="canada" flag="ca" />
        </NavLink>
        <NavLink to="/country/jp">
          <CountryRoute country="japan" flag="jp" />
        </NavLink>
        <NavLink to="/country/gr">
          <CountryRoute country="greece" flag="gr" />
        </NavLink>
        <NavLink to="/country/cz">
          <CountryRoute country="czech rp." flag="cz" />
        </NavLink>
        <NavLink to="/country/lv">
          <CountryRoute country="latvia" flag="lv" />
        </NavLink>
        <NavLink to="/country/se">
          <CountryRoute country="sweden" flag="se" />
        </NavLink>
        <NavLink to="/country/tr">
          <CountryRoute country="turkey" flag="tr" />
        </NavLink>
      </ul>
    </nav>
  );
};
