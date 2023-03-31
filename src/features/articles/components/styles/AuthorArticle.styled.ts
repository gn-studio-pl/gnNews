import styled from "styled-components";
import { StyledArticleProps } from "../../../../types/styled.types";

export const StyledAuthorArticle = styled.span<StyledArticleProps>`
  display: block;
  margin: 10px 0;
  font-size: ${({ isPopup }) => (isPopup ? "16px" : "16px")};
  color: var(--blue);
  font-weight: 600;
`;
