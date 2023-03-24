import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { SideNav } from "../components/sideNav/SideNav";
import "./rootLayout.css";

export const RootLayout = () => {
  const { country } = useParams();

  return (
    <>
      <Header />
      <SideNav />
      {!country && (
        <div className="main-default">
          <div>
            Click on links to check for latest news from selected countries.
          </div>
        </div>
      )}
      <Outlet />
      <Footer />
    </>
  );
};
