import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleLayout } from "./newsLayout";
import "./newsLayoutBtn.css";

export const NewsLayoutBtn = () => {
  const { t } = useTranslation();
  const newsLayoutState = useAppSelector(
    (state) => state.newsLayout.newsLayoutState
  );

  const dispatch = useAppDispatch();

  return (
    <button
      className="news-layout-btn"
      onClick={() => dispatch(toggleLayout())}
    >
      <span className={newsLayoutState === "list" ? "active-layout" : ""}>
        {t("newsLayout.list")}
      </span>{" "}
      /{" "}
      <span className={newsLayoutState === "grid" ? "active-layout" : ""}>
        {t("newsLayout.grid")}
      </span>
    </button>
  );
};
