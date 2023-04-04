import { Link } from "react-router-dom";
import Title from "./Title";
import Wrapper from "./Wrapper";

const Logo = (): React.ReactElement => {
  return (
    <Wrapper
      style={{
        zIndex: 5,
        cursor: "pointer",
      }}
    >
      <Link to="/">
        <Title idText="header.gnNews" type="H1" />
      </Link>
    </Wrapper>
  );
};

export default Logo;
