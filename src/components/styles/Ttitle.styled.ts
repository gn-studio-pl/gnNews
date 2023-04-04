import styled from "styled-components";
import { device } from "../../styles/breakPoints";

export const StyledTitle = styled.header`
  padding: ${({ style }) => (style?.padding ? style.padding : "0px")};
  margin: ${({ style }) => (style?.margin ? style.margin : "0px")};
`;

export const StyledH1 = styled.h1`
  font-size: 48px;
  line-height: 58px;
  color: ${({ style }) => (style?.color ? style.color : "var(--blue)")};
  font-weight: ${({ style }) => (style?.fontWeight ? style.fontWeight : "800")};
  @media (${device.lg}) {
    font-size: 40px;
    @media (${device.sm}) {
      font-size: 35px;
      @media (${device.xs}) {
        font-size: 28px;
        line-height: 45px;
      }
    }
  }
`;

export const StyledH2 = styled.h2`
  font-size: 20px;
  color: ${({ style }) => (style?.color ? style.color : "var(--blue)")};
  font-weight: ${({ style }) => (style?.fontWeight ? style.fontWeight : "700")};
`;

export const StyledH3 = styled.h3`
  font-size: 16px;
  color: ${({ style }) => (style?.color ? style.color : "var(--blue)")};
  font-weight: ${({ style }) => (style?.fontWeight ? style.fontWeight : "600")};
`;
