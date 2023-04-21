import { useTranslation } from "react-i18next";
import { Article } from "../../Main";
import "./newsModal.css";

interface newsModalProps {
  article: Article;
  open: boolean;
  onClose: () => void;
}

export const NewsModal = ({ article, open, onClose }: newsModalProps) => {
  const { t } = useTranslation();
  if (!open) return null;

  return (
    <div className="news-overlay">
      <div className="news-modal">
        <h2>{article.title}</h2>
        <p>
          {t("card.author")}: {article.author}
        </p>
        <div>
          <a href={article.url}>
            <button>{t("card.readFull")}</button>
          </a>
          <button onClick={onClose}>{t("card.close")}</button>
        </div>
      </div>
    </div>
  );
};
