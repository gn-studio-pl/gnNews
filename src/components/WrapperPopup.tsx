import { PopupProps } from "../types/components.types";
import { StyledDesktopExitPopup } from "./styles/DesktopExitPopup.styled";
import { StyledWrapperPopup } from "./styles/WrapperPopup.styled";
import { IoClose } from "react-icons/io5";
import { StyledBackdropPopup } from "./styles/BackdropPopup.styled";
import { StyledMobileExitPopup } from "./styles/MobileExitPopup.styled";
import { BrowserView, MobileView } from "react-device-detect";
import { useEffect, MouseEvent } from "react";
import { StyledContentPopup } from "./styles/ContentPopup.styled";

const WrapperPopup = (props: PopupProps): React.ReactElement => {
  const { popupContent, swapActive } = props;

  const mobileViewClosedHandler = (event: MouseEvent<HTMLDivElement>): void => {
    swapActive(event);
  };

  const desktopViewClosedHandler = (event: MouseEvent<HTMLDivElement>): void =>
    swapActive(event);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <StyledBackdropPopup>
      <StyledWrapperPopup>
        <StyledContentPopup>
          <BrowserView>
            <StyledDesktopExitPopup onClick={desktopViewClosedHandler}>
              <IoClose />
            </StyledDesktopExitPopup>
          </BrowserView>
          <MobileView>
            <StyledMobileExitPopup onClick={mobileViewClosedHandler} />
          </MobileView>
          {popupContent}
        </StyledContentPopup>
      </StyledWrapperPopup>
    </StyledBackdropPopup>
  );
};

export default WrapperPopup;
