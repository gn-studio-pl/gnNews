import styled from "styled-components";
import { device } from "../../../../styles/breakPoints";

export const StyledIconLayout = styled.div`
  display: flex;
  & svg {
    font-size: 25px;
    color: #5e7380;
    @media (${device.lg}) {
      font-size: 20px;
    }
  }
`;
