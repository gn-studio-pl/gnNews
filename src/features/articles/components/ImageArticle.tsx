import { ImageArticleProps } from "../../../types/components.types";
import { StyledImageArticle } from "./styles/ImageArticle.styled";

const ImageArticle = ({ src }: ImageArticleProps): React.ReactElement => {
  const defaultImg = require("../../../assets/img/img-not-found.png");

  return (
    <StyledImageArticle
      isPopup
      src={src ? src : defaultImg}
    ></StyledImageArticle>
  );
};

export default ImageArticle;
