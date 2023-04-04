import styled from "styled-components";
import { device } from "../../../../styles/breakPoints";

export const StyledWrapperLinkArticle = styled.span`
  display: inline-block;
  width: 80%;
  padding: 5px 10px;
  margin: 20px 10% 0 10%;
  height: fit-content;
  border: 1px solid var(--blue);
  text-align: center;
  @media (${device.sm}) {
    width: 100%;
    margin: 20px 0 0 0;
  }
`;
