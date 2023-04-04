import styled, { css } from "styled-components";
import { LayoutViewState } from "../../../../types/interfaces";

export const StyledWrapperArticle = styled.div<LayoutViewState>`
  display: grid;
  gap: 25px;
  padding-bottom: 10px;
  cursor: pointer;
  ${({ layout }) =>
    layout === "tiles"
      ? css`
          &:hover {
            box-shadow: 0px 15px 15px -10px var(--blue);
          }
          & img {
            width: 100%;
            max-height: 182px;
            object-fit: cover;
            margin: 0;
          }
        `
      : css`
          & img {
            display: none;
          }
          &:hover {
            box-shadow: 0px 15px 15px -20px var(--blue);
          }
        `}
`;
