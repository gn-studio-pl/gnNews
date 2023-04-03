import styled, { css } from "styled-components";
import { device } from "../../../../styles/breakPoints";
import { LayoutViewState } from "../../../../types/interfaces";

export const StyledWrapperLoaderArticles = styled.div<LayoutViewState>`
  display: flex;
  align-items: center;
  flex-grow: 1;
  ${({ layout }) =>
    layout === "tiles"
      ? css`
          grid-column: span 2;
          @media ${device.sm} {
            grid-column: span 1;
          }
        `
      : css`
          grid-column: span 1;
        `};
`;
