import { FormattedMessage } from "react-intl";
import Wrapper from "../components/Wrapper";
import {
  StlyedPageNotFound,
  StyledErrorCode,
  StyledErrorMessage,
  StyledRedirectToHome,
} from "../components/styles/PageNotFound.styled";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <Wrapper
      style={{
        flexDirection: "column",
        justifyContent: "center",
        gap: "30px",
        width: "100vw",
        height: "100vh",
        background: "var(--secondGrey)",
      }}
    >
      <StlyedPageNotFound>
        <StyledErrorCode>404</StyledErrorCode>
        <StyledErrorMessage>
          <FormattedMessage id="error.404" />
        </StyledErrorMessage>
      </StlyedPageNotFound>
      <StyledRedirectToHome onClick={redirectToHome}>
        <FormattedMessage id="error.redirect" />
      </StyledRedirectToHome>
    </Wrapper>
  );
};

export default PageNotFound;
