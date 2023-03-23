import "./styles/App.scss";
import { Footer, Navbar } from "./components";
import { CountryNews, HomePage, NotFoundPage } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  const countryName = "POLAND";
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path={`/country/${countryName}`} element={<CountryNews />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
