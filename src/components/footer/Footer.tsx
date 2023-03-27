import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Article } from "../main/Main";
import { Clock } from "./clock/Clock";
import "./footer.css";

export const Footer = () => {
  const { t } = useTranslation();
  const newsCounterState = useAppSelector(
    (state) => state.newsCounter.newsCounterState
  );

  return (
    <footer className="footer">
      <div className="clock">
        <Clock />
      </div>
      <div className="news-counter">
        {t("footer.articles")}: <span>{newsCounterState}</span>
      </div>
    </footer>
  );
};
