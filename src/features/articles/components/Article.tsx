import { useNavigate } from "react-router-dom";
import Wrapper from "../../../components/Wrapper";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { ArticleProps } from "../../../types/components.types";
import { focuseArticle } from "../articlesSlice";
import ImageArticle from "./ImageArticle";
import PublishedAtArticle from "./PublishedAtArticle";
import { StyledSourceArticle } from "./styles/SourceArticle.styled";
import { StyledTitleArticle } from "./styles/TitleArticle.styled";
import { StyledWrapperArticle } from "./styles/WrapperArticle.styled";

const Article = ({ article }: ArticleProps) => {
  const { layout } = useAppSelector((state) => state.layoutView);
  const { publishedAt, source, title, urlToImage } = article;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const hadleClick = () => {
    dispatch(focuseArticle(article));
    navigate(`/article/${title}`);
  };

  return (
    <StyledWrapperArticle layout={layout} onClick={hadleClick}>
      <ImageArticle src={urlToImage} />
      <StyledTitleArticle isPopup>{title}</StyledTitleArticle>
      <Wrapper style={{ justifyContent: "space-between", width: "100%" }}>
        <StyledSourceArticle>{source.name}</StyledSourceArticle>
        <PublishedAtArticle publishedAt={publishedAt} />
      </Wrapper>
    </StyledWrapperArticle>
  );
};

export default Article;
