import { FormattedMessage } from "react-intl";
import { TitleProps } from "../types/components.types";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledTitle,
} from "./styles/Ttitle.styled";

const Title = (props: TitleProps): React.ReactElement => {
  const { type, idText, defaultMessage, stylesBox, stylesH, children } = props;

  const rest = { id: idText, defaultMessage: defaultMessage };

  const headers = {
    H1: (
      <StyledH1 style={stylesH}>
        {idText ? <FormattedMessage {...rest} /> : defaultMessage}
      </StyledH1>
    ),
    H2: (
      <StyledH2 style={stylesH}>
        {idText ? <FormattedMessage {...rest} /> : defaultMessage}
      </StyledH2>
    ),
    H3: (
      <StyledH3 style={stylesH}>
        {idText ? <FormattedMessage {...rest} /> : defaultMessage}
      </StyledH3>
    ),
  };

  const renderHeader = (): JSX.Element => {
    switch (type) {
      case "H1":
        return headers.H1;
      case "H2":
        return headers.H2;
      case "H3":
        return headers.H3;
      default:
        return headers.H2;
    }
  };

  return (
    <StyledTitle style={stylesBox}>
      {renderHeader()}
      {children}
    </StyledTitle>
  );
};

export default Title;
