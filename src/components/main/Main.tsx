import React from "react";
import { Card } from "./card/Card";
import "./main.css";

interface MainProps {
  country: string;
}

export const Main = ({ country }: MainProps) => {
  return (
    <main className="main-content">
      <h2>
        News from <span>{country}</span>
      </h2>
      <div className="news-layout-list">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};
