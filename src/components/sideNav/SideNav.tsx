import React, { useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./sideNav.css";
import { NavLink } from "react-router-dom";
import CountryRoute from "./countryRoute/CountryRoute";
import { useAppSelector } from "../../redux/app/hooks";
import { useTranslation } from "react-i18next";

export const SideNav = () => {
  const { t } = useTranslation();
  const sidebarState = useAppSelector((state) => state.sidebar.sidebarState);

  const countries = [
    "pl",
    "ar",
    "be",
    "ca",
    "jp",
    "gr",
    "cz",
    "lv",
    "se",
    "tr",
  ];

  return (
    <nav
      role="nav"
      className={sidebarState === "open" ? "side-nav-active" : "side-nav"}
    >
      <ul>
        {countries.map((country) => {
          return (
            <NavLink key={country} to={`/country/${country}`}>
              <CountryRoute country={t("sidebar." + country)} flag={country} />
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};
