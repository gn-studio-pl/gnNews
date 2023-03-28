import { useTranslation } from "react-i18next";
import useClock from "../../hooks/useClock";
import { useAppSelector } from "../../redux/app/hooks";
import "./footer.css";

export const Footer = () => {
  const { t } = useTranslation();
  const articleNumber = useAppSelector(
    (state) => state.articles.articlesNumber
  );
  const { currentTime } = useClock("");

  return (
    <footer className="footer">
      <div className="clock">{currentTime}</div>
      <div className="news-counter">
        {t("footer.articles")}: <span>{articleNumber}</span>
      </div>
    </footer>
  );
};
