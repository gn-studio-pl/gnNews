import Logo from "../components/Logo";
import Options from "../components/Options";
import { StyledHeader } from "../components/styles/Header.styled";

const Header = (): React.ReactElement => {
  return (
    <StyledHeader>
      <Logo />
      <Options />
    </StyledHeader>
  );
};

export default Header;
