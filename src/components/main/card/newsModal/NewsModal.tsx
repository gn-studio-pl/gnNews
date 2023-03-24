import { Article } from "../../Main";
import "./newsModal.css";

interface newsModalProps {
  article: Article;
  open: boolean;
  onClose: () => void;
}

export const NewsModal = ({ article, open, onClose }: newsModalProps) => {
  if (!open) return null;

  return (
    <div className="news-overlay">
      <div className="news-modal">
        <h2>{article.title}</h2>
        <p>Author: {article.author}</p>
        <div>
          <a href={article.url}>
            <button>READ FULL ARTICLE</button>
          </a>
          <button onClick={onClose}>CLOSE</button>
        </div>
      </div>
    </div>
  );
};
