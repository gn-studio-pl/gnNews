import { FormattedMessage } from "react-intl";
import { StyledSpinner } from "../../../components/styles/Spinner.styled";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { StyledLoaderArticles } from "./styles/LoaderArticles.styled";
import { StyledWrapperLoaderArticles } from "./styles/WrapperLoaderArticles.styled";

const LoadingListArticles = (): React.ReactElement => {
  const { layout } = useAppSelector((state) => state.layoutView);

  return (
    <StyledWrapperLoaderArticles layout={layout}>
      <StyledLoaderArticles>
        <FormattedMessage id="main.loader" />
        <StyledSpinner />
      </StyledLoaderArticles>
    </StyledWrapperLoaderArticles>
  );
};

export default LoadingListArticles;
