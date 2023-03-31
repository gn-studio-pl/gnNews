import styled from "styled-components";
import { device } from "../../styles/breakPoints";

export const StyledBackdropPopup = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
  @media (${device.sm}) {
    background-color: transparent;
  }
`;
