import { FormattedMessage } from "react-intl";
import {
  StyledSecretContent,
  StyledSecretHeader,
  StyledSecretPopup,
} from "./styles/SecretPopup.styled";

const SecretPopup = (): React.ReactElement => {
  return (
    <StyledSecretPopup>
      <StyledSecretHeader>
        <FormattedMessage id="popup.secret.header-first" />
      </StyledSecretHeader>
      <StyledSecretContent>
        <FormattedMessage id="popup.secret.content-first" />
      </StyledSecretContent>

      <StyledSecretHeader>
        <FormattedMessage id="popup.secret.header-second" />
      </StyledSecretHeader>
      <StyledSecretContent>
        <FormattedMessage id="popup.secret.content-second" />
      </StyledSecretContent>
    </StyledSecretPopup>
  );
};

export default SecretPopup;
