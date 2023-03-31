import styled from "styled-components";
import { device } from "../../../../styles/breakPoints";

export const StyledLayoutSwitch = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 140px;
  min-width: 140px;
  padding: 10px 24px;
  border-radius: 15px;
  font-size: 18px;
  cursor: pointer;
  @media (${device.lg}) {
    font-size: 16px;
    @media (${device.md}) {
      padding: 8px 24px;
      min-width: 110px;
      @media (${device.sm}) {
        padding: 0;
        min-width: auto;
        width: auto;
      }
    }
  }
`;
