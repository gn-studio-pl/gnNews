import styled from "styled-components";
import { device } from "../../styles/breakPoints";

export const StyledHeader = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 10px 40px;
  margin: 0 auto;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--blue);
  z-index: 1;
  @media (${device.md}) {
    padding: 15px 30px;
    @media (${device.sm}) {
      padding: 10px 20px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      background-color: var(--white);
      z-index: 3;
    }
  }
`;
