import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../redux/app/hooks";
import { Article } from "../../../redux/features/articles";

import "./card.css";
import { NewsModal } from "./newsModal/NewsModal";

interface CardProps {
  article: Article;
}

export const Card = ({ article }: CardProps) => {
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const newsLayoutState = useAppSelector(
    (state) => state.newsLayout.newsLayoutState
  );

  return (
    <div>
      <div
        onClick={() => setIsOpenModal(true)}
        className={newsLayoutState === "list" ? "card-list" : "card-tile"}
      >
        <h3>
          {newsLayoutState === "list" ? (
            <>
              {article.title.slice(0, 70)}
              {article.title.length > 70 && <span>..</span>}
            </>
          ) : (
            <>
              {article.title.slice(0, 60)}
              {article.title.length > 60 && <span>..</span>}
            </>
          )}
        </h3>
        <div className="source-date">
          <p className="source">
            {t("card.source")}: {article.author}
          </p>
          <p>
            {t("card.published")}: {article.publishedAt.slice(0, 10)}
          </p>
        </div>
        {newsLayoutState === "grid" && (
          <div>
            {article.urlToImage ? (
              <img
                className="article-img"
                src={article.urlToImage}
                alt="article photo"
              />
            ) : (
              <img
                className="article-img"
                src="/image-not-found-1-scaled.png"
                alt="no image found"
              />
            )}
            <button className="read-more-btn">{t("card.readMore")}</button>
          </div>
        )}
      </div>
      <NewsModal
        article={article}
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </div>
  );
};
