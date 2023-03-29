import { Footer } from "../../features/gnNews/Footer";
import { Header } from "../../features/gnNews/Header";
import { MainContent } from "../../features/gnNews/MainContent";
import { SideMenu } from "../../features/gnNews/SideMenu";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <SideMenu />
        <MainContent />
      </main>
      <Footer />
    </>
  );
};
