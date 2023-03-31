import styled from "styled-components";
import { device } from "../../styles/breakPoints";

export const StyledSecretLink = styled.div`
  padding: 10px 27px;
  border-radius: 15px;
  color: var(--blue);
  font-size: 18px;
  font-weight: 600;
  z-index: 2;
  user-select: none;
  cursor: pointer;
  @media (${device.lg}) {
    font-size: 16px;
    @media (${device.md}) {
      padding: 8px 20px;
      @media (${device.sm}) {
        padding: 0;
      }
    }
  }
`;
