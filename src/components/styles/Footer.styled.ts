import styled from "styled-components";
import { device } from "../../styles/breakPoints";

export const StyledFooter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75px;
  background-color: var(--blue);
  color: var(--white);
  z-index: 0;
`;

export const StyledAmountArticles = styled.span`
  margin-right: 5px;
`;

export const StyledTextFooter = styled.span`
  margin-top: 30px;
  font-weight: 600;
  font-size: 14px;
  color: var(--white);
  @media (${device.md}) {
    margin-top: 0;
  }
`;
