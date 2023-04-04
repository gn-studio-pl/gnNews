import styled from "styled-components";

export const StyledMobileExitPopup = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto -5px auto;
  padding: 20px 20px 20px 20px;
  border-radius: 20px 20px 0 0;
  background-color: var(--white);
  z-index: 1;
  &:active::after {
    background-color: var(--darkerBlue);
  }
  &::after {
    content: "";
    position: relative;
    width: 60%;
    height: 5px;
    border-radius: 20px;
    background-color: var(--blue);
  }
`;
