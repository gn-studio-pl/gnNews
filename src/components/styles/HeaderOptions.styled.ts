import styled from "styled-components";
import { device } from "../../styles/breakPoints";

export const StyledHeaderOptions = styled.div`
  display: flex;
  align-items: center;
  @media (${device.sm}) {
    width: 100%;
    gap: 15px 40px;
    @media (${device.xs}) {
      margin-bottom: 0;
      flex-wrap: wrap;
    }
  }
`;
