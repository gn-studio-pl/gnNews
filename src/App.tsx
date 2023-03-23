import "./styles/App.scss";
import { Footer, Navbar } from "./components";
import { CountryNews, HomePage, NotFoundPage } from "./pages";
import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getDataFromApi } from "./store/countryNews/CountryNewsSlice";
import { AppDispatch } from "./store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const countryName = "POLAND";

  dispatch(getDataFromApi("pl"));

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
