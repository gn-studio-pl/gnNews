import styled from "styled-components";

export const StyledCloseButton = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 5px 20px;
  cursor: pointer;
  &:hover svg {
    color: var(--lighterBlack);
  }
  svg {
    color: var(--white);
    font-size: 25px;
    transition: 0.15s linear;
  }
`;
