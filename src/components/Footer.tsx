import { useSelector } from "react-redux";
import { RootState } from "../store";
import "../styles/components/footer_style.scss";

export const Footer = () => {
  const numberOfArticles = useSelector(
    (state: RootState) => state.news.articles.length
  );

  return (
    <footer className="footer">
      <p>
        created by <a href="https://github.com/annakoruc">annakoruc</a> |
        recruitment task <a href="https://www.gnstudio.dev/">gnStudio</a>
      </p>
      <div className="footer_data">
        <span className="clock">12:00</span>
        <p>|</p>
        <p>number of articles: {numberOfArticles} </p>
      </div>
    </footer>
  );
};
