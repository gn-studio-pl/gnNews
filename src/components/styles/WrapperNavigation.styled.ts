import styled from "styled-components";
import { device } from "../../styles/breakPoints";

export const StyledWrapperNavigation = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-height: calc(100vh - 210px);
  width: 300px;
  padding: 20px 40px;
  border-right: 1px solid var(--lighterGrey);

  @media (${device.md}) {
    width: 250px;
    padding: 20px 0 20px 40px;
    @media (${device.sm}) {
      position: absolute;
      right: 0;
      top: 0;
      height: 100vh;
    }
  }
`;
