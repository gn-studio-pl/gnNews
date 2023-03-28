import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/app/hooks";

import "./header.css";
import { NewsLayoutBtn } from "./newsLayout/NewsLayoutBtn";
import { Popup } from "../utils/popup/Popup";
import { SideNavIcon } from "./sideNavIcon/SideNavIcon";
import { setNumberOfArticles } from "../../redux/features/articles";

interface LngProps {
  nativeName: string;
  flag: string;
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const { t, i18n } = useTranslation();
  const lngs: LngProps[] = [
    { nativeName: "English", flag: "gb" },
    { nativeName: "Polish", flag: "pl" },
  ];

  return (
    <header className="header">
      <div className="logo-sidebar">
        <SideNavIcon />
        <Link onClick={() => dispatch(setNumberOfArticles(0))} to="/">
          <h1>
            gn<span>News</span>
          </h1>
        </Link>
        <div className="lngs-container">
          {lngs.map((lng) => (
            <button
              key={lng.nativeName}
              type="submit"
              onClick={() => i18n.changeLanguage(lng.flag)}
            >
              <span className={`fi fi-${lng.flag}`}></span>
            </button>
          ))}
        </div>
      </div>
      <div className="nav-btns">
        <NewsLayoutBtn />
        <button onClick={() => setIsOpen(true)}>{t("popup.popup")}</button>
        <Popup open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
};
