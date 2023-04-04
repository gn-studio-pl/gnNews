import { FormattedMessage } from "react-intl";
import { LinkArticleProps } from "../../../types/components.types";
import { StyledLinkArticle } from "./styles/LinkArticle.styled";
import { StyledWrapperLinkArticle } from "./styles/WrapperLinkArticle.styled";

const LinkArticle = ({ href }: LinkArticleProps): React.ReactElement => {
  return (
    <StyledWrapperLinkArticle>
      <StyledLinkArticle href={href} target="_blank">
        <FormattedMessage id="main.article.popup.link" />
      </StyledLinkArticle>
    </StyledWrapperLinkArticle>
  );
};

export default LinkArticle;
