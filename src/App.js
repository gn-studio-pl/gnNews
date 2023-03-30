import'./css/style.css';
import './css/modal-general.css'

import searchNews from "./api";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ArticlesList from "./components/ArticlesList";

function App() {
  const [changeCountry, setChangeCountry] = useState(null);
  const [articles, setArticles] = useState([]);

  const fetchData = useCallback(async (changeCountry) => {
    const response = await searchNews(changeCountry);
    setArticles(response);
    return response;
  }, []);

  useEffect(() => {
    fetchData(changeCountry);
  }, [changeCountry]);

  const handleGetCountry = (country) => {
    setChangeCountry(country);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Sidebar getCountry={handleGetCountry} />}>
        <Route index element={<Content />} />
        <Route
          path="country/francja"
          element={<ArticlesList articles={articles} />}
        />
        <Route
          path="country/wlochy"
          element={<ArticlesList articles={articles} />}
        />
        <Route
          path="country/malezja"
          element={<ArticlesList articles={articles} />}
        />
        <Route
          path="country/singapur"
          element={<ArticlesList articles={articles} />}
        />
        <Route
          path="country/usa"
          element={<ArticlesList articles={articles} />}
        />
        <Route
          path="country/kanada"
          element={<ArticlesList articles={articles} />}
        />
      </Route>
    )
  );

  return (
    <>
      <Header />
      <main className="main-wrapper">
        <RouterProvider router={router} />
      </main>
      <Footer articlesAmount={articles.length} />
    </>
  );
}

export default App;
