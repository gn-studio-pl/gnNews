import Title from "../../../components/Title";
import { useAppSelector } from "../../../hooks/useAppSelector";
import Article from "./Article";
import { StyledWrapperListArticles } from "./styles/WrapperListArticles.styled";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { fetchNextArticles } from "../articlesSlice";
import { isScrollOnBottom } from "../../../helpers/isScrollOnBottomPage";
import { isEmptyArray } from "../../../helpers/isEmptyArray";
import { isArrayInRange } from "../../../helpers/isArrayInRange";
import LoadingListArticles from "./LoadingListArticles";
import ErrorArticles from "./ErrorArticles";
import { AppDispatch } from "../../../store";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import PopupArticle from "./PopupArticle";
import { PRODUCTION_URL } from "../../../config/PRODUCTION_URL.config";
import ErrorAPI from "./ErrorAPI";

const ListArticles = (): React.ReactElement => {
  const { articles, totalResults, isLoading, error } = useAppSelector(
    (state) => state.articles
  );
  const { layout } = useAppSelector((state) => state.layoutView);

  const dispatch: AppDispatch = useAppDispatch();

  const listOfArticles: JSX.Element[] = articles.map((article, index) => (
    <Article key={index} article={article} />
  ));

  const handleScroll = useCallback(() => {
    if (
      isScrollOnBottom() &&
      !isEmptyArray(articles) &&
      isArrayInRange(articles, 0, totalResults - 1)
    ) {
      !isLoading && dispatch(fetchNextArticles());
    }
  }, [articles, totalResults, isLoading, dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleScroll]);

  return (
    <>
      <Title
        type="H2"
        idText="main.title"
        stylesBox={{ width: "100%", margin: "0 40px" }}
      />
      {PRODUCTION_URL && <ErrorAPI />}
      {error?.status === "error" ? (
        <ErrorArticles />
      ) : (
        <StyledWrapperListArticles layout={layout}>
          {listOfArticles}
          {isLoading ? <LoadingListArticles /> : null}
        </StyledWrapperListArticles>
      )}
      <Routes>
        <Route path="/:country" element={<Outlet />} />
        <Route path="/:country/article" element={<PopupArticle />} />
        <Route path="/*" element={<Navigate to="/Page-Not-Found" />} />
      </Routes>
    </>
  );
};

export default ListArticles;
