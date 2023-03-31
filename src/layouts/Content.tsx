import { Routes, Route } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import PopupArticle from "../features/articles/components/PopupArticle";
import Articles from "../features/articles/Articles";

const Content = (): React.ReactElement => {
  return (
    <Wrapper
      style={{
        flexWrap: "wrap",
        padding: "20px 0px 20px 0px",
        height: "100%",
        gap: 30,
        flexGrow: 1,
      }}
    >
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Articles />
              <Routes>
                <Route path="/article/:idArticle" element={<PopupArticle />} />
              </Routes>
            </>
          }
        ></Route>
      </Routes>
    </Wrapper>
  );
};

export default Content;
