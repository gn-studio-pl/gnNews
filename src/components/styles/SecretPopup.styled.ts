import styled from "styled-components";
import { device } from "../../styles/breakPoints";

export const StyledSecretPopup = styled.div`
  width: 100%;
  height: 100%;
  padding: 35px 75px 35px 35px;
`;

export const StyledSecretHeader = styled.div`
  width: fit-content;
  font-weight: 600;
  font-size: 20px;
  color: var(--black);
`;

export const StyledSecretContent = styled.div`
  width: fit-content;
  margin: 20px 0 40px 0;
  font-weight: 500;
  font-size: 16px;
  color: var(--grey);
  &:last-of-type {
    padding-bottom: 25px;
  }

  @media (${device.sm}) {
    padding-bottom: 25px;
  }
`;
