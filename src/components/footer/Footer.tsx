import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Article } from "../main/Main";
import { Clock } from "./clock/Clock";
import "./footer.css";

export const Footer = () => {
  const newsCounterState = useAppSelector(
    (state) => state.newsCounter.newsCounterState
  );

  return (
    <footer className="footer">
      <div className="clock">
        <Clock />
      </div>
      <div className="news-counter">
        Articles displayed: <span>{newsCounterState}</span>
      </div>
    </footer>
  );
};
