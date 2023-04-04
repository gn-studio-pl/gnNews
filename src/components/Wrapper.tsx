import { WrapperProps } from "../types/components.types";
import { StyledWrapper } from "./styles/Wrapper.styled";

const Wrapper = (props: WrapperProps): React.ReactElement => {
  const { children, style, onClick, onChange, ...rest } = props;

  return (
    <StyledWrapper
      style={style ? style : undefined}
      onClick={onClick}
      onChange={onChange}
      {...rest}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
