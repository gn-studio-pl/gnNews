import styled from "styled-components";
import { StyledArticleProps } from "../../../../types/styled.types";

export const StyledTitleArticle = styled.h2<StyledArticleProps>`
  font-size: ${({ isPopup }) => (isPopup ? "18px" : "16px")};
  font-weight: 600;
  color: var(--black);
  word-wrap: break-word;
`;
