import styled from "styled-components";

export const StyledDesktopExitPopup = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  cursor: pointer;
  & svg {
    color: var(--blue);
    font-size: 25px;
    transition: 0.2s linear;
  }
  &:hover svg {
    font-size: 28px;
  }
`;
