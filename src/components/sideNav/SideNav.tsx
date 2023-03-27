import React, { useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./sideNav.css";
import { NavLink } from "react-router-dom";
import CountryRoute from "./countryRoute/CountryRoute";
import { useAppSelector } from "../../app/hooks";
import { useTranslation } from "react-i18next";

export const SideNav = () => {
  const { t } = useTranslation();
  const sidebarState = useAppSelector((state) => state.sidebar.sidebarState);

  useEffect(() => {
    console.log(sidebarState);
  }, [sidebarState]);

  return (
    <nav className={sidebarState === "open" ? "side-nav-active" : "side-nav"}>
      <ul>
        <NavLink to="/country/pl">
          <CountryRoute country={t("sidebar.pl")} flag="pl" />
        </NavLink>
        <NavLink to="/country/ar">
          <CountryRoute country={t("sidebar.ar")} flag="ar" />
        </NavLink>
        <NavLink to="/country/be">
          <CountryRoute country={t("sidebar.be")} flag="be" />
        </NavLink>
        <NavLink to="/country/ca">
          <CountryRoute country={t("sidebar.ca")} flag="ca" />
        </NavLink>
        <NavLink to="/country/jp">
          <CountryRoute country={t("sidebar.jp")} flag="jp" />
        </NavLink>
        <NavLink to="/country/gr">
          <CountryRoute country={t("sidebar.ge")} flag="gr" />
        </NavLink>
        <NavLink to="/country/cz">
          <CountryRoute country={t("sidebar.cz")} flag="cz" />
        </NavLink>
        <NavLink to="/country/lv">
          <CountryRoute country={t("sidebar.lt")} flag="lv" />
        </NavLink>
        <NavLink to="/country/se">
          <CountryRoute country={t("sidebar.sw")} flag="se" />
        </NavLink>
        <NavLink to="/country/tr">
          <CountryRoute country={t("sidebar.tu")} flag="tr" />
        </NavLink>
      </ul>
    </nav>
  );
};
