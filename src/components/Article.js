import { useSelector } from "react-redux";
import { useState } from "react";
import ArticlePopup from "./ArticlePopup";

function Article({
  title,
  source,
  publication,
  description,
  content,
  author,
  url,
  img,
}) {
  const changeShowArticlesAsList = useSelector((state) => {
    return state.list;
  });

  const [showArticlePopup, setShowArticlePopup] = useState(false);

  const handleOpenArticlePopup = () => {
    setShowArticlePopup(true);
  };

  const handleCloseArticlePopup = () => {
    setShowArticlePopup(false);
  };

  const articlePopup = (
    <ArticlePopup onClose={handleCloseArticlePopup}>
      <h4 className="article-popup-box__title">{title}</h4>
      <p className="article-popup-box__description">{content}</p>
      <p className="article-popup-box__sign">{author}</p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="article-popup-box__url"
      >
        {url}
      </a>
    </ArticlePopup>
  );

  const articlesAsBoxes = (
    <article className="articles-box-item" onClick={handleOpenArticlePopup}>
      {img && (
        <img
          src={img}
          alt="grafika do artykułu"
          className="articles-box-item__img"
        />
      )}
      <div className="articles-box-item__text">
        <h3 className="articles-box-item__title">{title}</h3>
        <h6 className="articles-box-item__subtitle">{description}</h6>
        <div className="articles-box-item-more-info">
          <h6 className="articles-box-item__subtitle articles-box-item__subtitle--bold">
            {source}
          </h6>
          <p className="articles-box-item__date">{publication}</p>
        </div>
      </div>
    </article>
  );

  const articlesAsList = (
    <article className="articles-list-item" onClick={handleOpenArticlePopup}>
      <h3 className="articles-list-item__title">{title}</h3>
      <h6 className="articles-list-item__subtitle">{source}</h6>
      <p className="articles-list-item__date">{publication}</p>
    </article>
  );

  return (
    <>
      {(changeShowArticlesAsList && articlesAsList) || articlesAsBoxes}
      {showArticlePopup && articlePopup}
    </>
  );
}

export default Article;
