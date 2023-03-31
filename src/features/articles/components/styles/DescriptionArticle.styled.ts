import styled, { css } from "styled-components";
import { device } from "../../../../styles/breakPoints";
import { StyledArticleProps } from "../../../../types/styled.types";

export const StyledDescriptionArticle = styled.span<StyledArticleProps>`
  display: block;
  margin-top: ${({ isPopup }) => (isPopup ? "50px" : "auto")};
  font-size: ${({ isPopup }) => (isPopup ? "16px" : "16px")};
  text-align: ${({ isPopup }) => (isPopup ? "justify" : "auto")};
  color: var(--grey);
  line-height: 26px;
  text-indent: ${({ isPopup }) => (isPopup ? "30px" : "auto")};
  ${({ isPopup }) =>
    isPopup
      ? css`
          @media (${device.sm}) {
            margin: 0;
          }
        `
      : null}
`;
