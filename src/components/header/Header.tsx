import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { getValue } from "../../features/newsCounter/newsCounter";
import { toggleSidebarState } from "../../features/sidebarState/sidebarState";
import { NewsLayoutBtn } from "../../features/newsLayout/NewsLayoutBtn";
import { Modal } from "./modal/Modal";
import "./header.css";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const { t, i18n } = useTranslation();
  const lngs: any = {
    en: { nativeName: "English", flag: "gb" },
    pl: { nativeName: "Polish", flag: "pl" },
  };

  return (
    <header className="header">
      <div className="logo-sidebar">
        <div className="side-nav-icon">
          <label htmlFor="check">
            <input
              onClick={() => dispatch(toggleSidebarState())}
              type="checkbox"
              id="check"
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <Link onClick={() => dispatch(getValue(0))} to="/">
          <h1>
            gn<span>News</span>
          </h1>
        </Link>
        <div className="lngs-container">
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              <span className={`fi fi-${lngs[lng].flag}`}></span>
            </button>
          ))}
        </div>
      </div>
      <div className="nav-btns">
        <NewsLayoutBtn />
        <button onClick={() => setIsOpen(true)}>{t("popup.popup")}</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
};
