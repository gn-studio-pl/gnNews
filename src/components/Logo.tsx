import Title from "./Title";
import Wrapper from "./Wrapper";

const Logo = (): React.ReactElement => {
  return (
    <Wrapper
      style={{
        zIndex: 5,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <Title idText="header.gnNews" type="H1" />
    </Wrapper>
  );
};

export default Logo;
