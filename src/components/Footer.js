import "../css/footer.css";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

function Footer({ articlesAmount }) {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
      setInterval(() => {
          setCurrentTime(new Date().toLocaleTimeString())
      }, 1000)
  }, []);

  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <p className="footer-content__text">
          {t("current_time")} <strong>{currentTime}</strong>
        </p>
        <p className="footer-content__text">
          &copy; {t("created_by")} <strong>Magdalena Bieńkowska</strong>
        </p>
        <p className="footer-content__text">
          {t("articles_number")} <strong>{articlesAmount}</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
