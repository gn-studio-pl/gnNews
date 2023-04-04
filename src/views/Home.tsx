import Wrapper from "../components/Wrapper";
import Content from "../layouts/Content";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Navigation from "../layouts/Navigation";

const Home = () => {
  return (
    <>
      <Header />
      <Wrapper
        style={{
          alignItems: "flex-start",
          maxWidth: 1200,
          minHeight: "calc(100vh - 154px)",
          margin: "0 auto",
        }}
      >
        <Navigation />
        <Content />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
