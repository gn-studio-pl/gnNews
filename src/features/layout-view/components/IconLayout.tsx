import Wrapper from "../../../components/Wrapper";
import { IconLayoutProps } from "../../../types/components.types";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { StyledIconLayout } from "./styles/IconLayout.styled";

const IconLayout = ({ type }: IconLayoutProps): React.ReactElement => {
  const IconComponent: JSX.Element =
    type === "list" ? <MdOutlineFormatListBulleted /> : <RxDashboard />;

  return (
    <Wrapper style={{ alignItems: "center", width: "auto" }}>
      <StyledIconLayout>{IconComponent}</StyledIconLayout>
    </Wrapper>
  );
};

export default IconLayout;
