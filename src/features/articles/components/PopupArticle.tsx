import Wrapper from "../../../components/Wrapper";
import WrapperPopup from "../../../components/WrapperPopup";
import { useAppSelector } from "../../../hooks/useAppSelector";
import ImageArticle from "./ImageArticle";
import LinkArticle from "./LinkArticle";
import { StyledAuthorArticle } from "./styles/AuthorArticle.styled";
import { StyledDescriptionArticle } from "./styles/DescriptionArticle.styled";
import { StyledTitleArticle } from "./styles/TitleArticle.styled";
import { Navigate, NavigateFunction, useNavigate } from "react-router-dom";

const PopupArticle = (): React.ReactElement => {
  const { focusedArticle } = useAppSelector((state) => state.articles);
  const navigate: NavigateFunction = useNavigate();

  if (!focusedArticle) return <Navigate to="/" />;

  const { author, description, title, url, urlToImage } = focusedArticle!;

  const swapActive = (): void => {
    navigate(-1);
  };

  return (
    <WrapperPopup
      swapActive={swapActive}
      popupContent={
        <Wrapper
          style={{
            display: "block",
            padding: 40,
          }}
        >
          <ImageArticle src={urlToImage} />
          <StyledTitleArticle isPopup>{title}</StyledTitleArticle>
          <StyledAuthorArticle isPopup>{author}</StyledAuthorArticle>
          <StyledDescriptionArticle isPopup>
            {description}
          </StyledDescriptionArticle>
          <LinkArticle href={url} />
        </Wrapper>
      }
    />
  );
};

export default PopupArticle;
