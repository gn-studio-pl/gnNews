import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { MainRoot } from "../components/mainRoot/MainRoot";
import { SideNav } from "../components/sideNav/SideNav";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <SideNav />
      <MainRoot />
      <Outlet />
      <Footer />
    </>
  );
};
