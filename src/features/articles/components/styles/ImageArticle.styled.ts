import styled, { css } from "styled-components";
import { device } from "../../../../styles/breakPoints";
import { StyledArticleProps } from "../../../../types/styled.types";

export const StyledImageArticle = styled.img<StyledArticleProps>`
  position: "relative";
  display: block;
  width: ${({ isPopup }) => (isPopup ? "60%" : "100%")};
  float: ${({ isPopup }) => (isPopup ? "left" : "normal")};
  margin: ${({ isPopup }) => (isPopup ? "4px 30px 20px 0" : "auto")};
  border-radius: 5px;
  ${({ isPopup }) =>
    isPopup
      ? css`
          @media (${device.sm}) {
            width: 100%;
            max-width: 100%;
            margin: 0 0 25px 0;
          }
        `
      : null}
`;
