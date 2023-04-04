import SecretLink from "./SecretLink";
import LayoutSwitch from "../features/layout-view/LayoutSwitch";
import Language from "../features/translator/Language";
import { StyledHeaderOptions } from "./styles/HeaderOptions.styled";

const Options = (): React.ReactElement => {
  return (
    <StyledHeaderOptions>
      <SecretLink />
      <LayoutSwitch />
      <Language />
    </StyledHeaderOptions>
  );
};

export default Options;
