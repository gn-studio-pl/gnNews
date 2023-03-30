import { useTranslation } from "react-i18next";

import '../css/articles.css';
import Article from "./Article";

function ArticlesList({ articles }) {
  const { t } = useTranslation();

  const renderedArticles = articles.map(({title, source, publishedAt, description, content, author, url, urlToImage}) => {
    return <Article key={title} title={title} source={source.name} publication={publishedAt} description={description} content={content} author={author} url={url} img={urlToImage}/>
  });
  

  return (
    <div className="articles-container">
      {renderedArticles.length === 0 ? <p className='articles-container-text'>{t("choose_country")}</p> : renderedArticles}
    </div>
  );
}

export default ArticlesList;
