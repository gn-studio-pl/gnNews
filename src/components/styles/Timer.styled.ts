import styled from "styled-components";
import { device } from "../../styles/breakPoints";

export const StyledTimer = styled.div`
  position: absolute;
  top: -50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 700px;
  height: 60px;
  border-radius: 8px;
  color: var(--white);
  font-weight: 700;
  font-size: 18px;
  background-color: var(--lighterGrey);
  transform: translateY(5px);
  svg {
    font-size: 25px;
  }

  @media (${device.md}) {
    display: none;
  }
`;
