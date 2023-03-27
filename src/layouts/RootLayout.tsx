import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useParams } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { SideNav } from "../components/sideNav/SideNav";
import "./rootLayout.css";

export const RootLayout = () => {
  const { country } = useParams();
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <SideNav />
      {!country && (
        <div className="main-default">
          <div>{t("main.msg")}</div>
        </div>
      )}
      <Outlet />
      <Footer />
    </>
  );
};
