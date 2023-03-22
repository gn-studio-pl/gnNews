import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { SideNav } from "../components/sideNav/SideNav";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <SideNav />
      <Outlet />
      <Footer />
    </>
  );
};
