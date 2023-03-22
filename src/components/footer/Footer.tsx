import React from "react";
import { Clock } from "./clock/Clock";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="clock">
        <Clock />
      </div>
      <div className="news-counter">
        Articles displayed: <span>10</span>
      </div>
    </footer>
  );
};
