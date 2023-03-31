import NavigationList from "../components/NavigationList";
import { StyledWrapperNavigation } from "../components/styles/WrapperNavigation.styled";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

const Navigation = (): React.ReactElement => {
  return (
    <Wrapper
      style={{
        zIndex: 0,
        flexShrink: 0,
        position: "sticky",
        left: 0,
        top: 79,
      }}
    >
      <StyledWrapperNavigation>
        <Title type="H2" idText="navigation.title" />
        <NavigationList />
      </StyledWrapperNavigation>
    </Wrapper>
  );
};

export default Navigation;
