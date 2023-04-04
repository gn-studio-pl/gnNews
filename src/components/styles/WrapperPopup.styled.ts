import styled from "styled-components";
import { device } from "../../styles/breakPoints";

export const StyledWrapperPopup = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  width: 964px;
  height: 520px;
  border-radius: 20px;
  background-color: var(--white);
  transform: translate(-50%, 50%);
  overflow: hidden;

  @media (max-width: 1024px) {
    width: calc(100% - 40px);
    @media (${device.sm}) {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 70vh;
      border-radius: 25px 25px 0 0;
      transform: translate(0, 0);
      background-color: var(--white);
      box-shadow: 0px 5px 20px var(--blue);
    }
  }
`;
