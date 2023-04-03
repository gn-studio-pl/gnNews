import { FormattedMessage } from "react-intl";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { AppDispatch } from "../../store";
import { LayoutView } from "../../types/types";
import IconLayout from "./components/IconLayout";
import { StyledLayoutSwitch } from "./components/styles/LayoutSwitch.styled";
import { StyledNameLayout } from "./components/styles/NameLayout.styled";
import { changeLayout } from "./layoutViewSlice";
import { LayoutViewState } from "../../types/interfaces";

const LayoutSwitch = (): React.ReactElement => {
  const { layout } = useAppSelector<LayoutViewState>(
    (state) => state.layoutView
  );
  const dispatch: AppDispatch = useAppDispatch();

  const handleClick = (): void => {
    let newLayout: LayoutView = swapLayout();
    dispatch(changeLayout(newLayout));
  };

  const swapLayout = (): LayoutView => (layout === "list" ? "tiles" : "list");

  const idTitle: string = layout === "list" ? "layout.list" : "layout.tiles";

  return (
    <StyledLayoutSwitch onClick={handleClick}>
      <IconLayout type={layout} />
      <StyledNameLayout>
        <FormattedMessage id={idTitle} defaultMessage="err" />
      </StyledNameLayout>
    </StyledLayoutSwitch>
  );
};

export default LayoutSwitch;
