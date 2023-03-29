import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import Aside from "../components/organisms/Aside";
import Content from "../components/organisms/Content";

function HomePage() {
  return (
    <div className="m-auto grid grid-cols-6 grid-rows-16">
      {/* m-auto grid grid-cols-6 grid-rows-16  */}
      <Navbar />
      <Aside />
      <Content />
      <Footer />
    </div>
  );
}

export default HomePage;
