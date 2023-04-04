import { FormattedMessage } from "react-intl";
import {
  StyledAmountArticles,
  StyledFooter,
  StyledTextFooter,
} from "../components/styles/Footer.styled";
import Timer from "../components/Timer";
import { useAppSelector } from "../hooks/useAppSelector";

const Footer = (): React.ReactElement => {
  const { articles } = useAppSelector((state) => state.articles);

  const amountArticles: number = articles.length;

  return (
    <StyledFooter>
      <Timer />
      <StyledTextFooter>
        <StyledAmountArticles>{amountArticles}</StyledAmountArticles>
        <FormattedMessage id="footer.article-info" />
      </StyledTextFooter>
    </StyledFooter>
  );
};

export default Footer;
