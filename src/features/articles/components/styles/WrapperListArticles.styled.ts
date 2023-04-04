import styled, { css } from "styled-components";
import { device } from "../../../../styles/breakPoints";
import { LayoutViewState } from "../../../../types/interfaces";

export const StyledWrapperListArticles = styled.div<LayoutViewState>`
  display: grid;
  height: 100%;
  grid-gap: 80px 80px;
  padding-bottom: 100px;
  margin: 0 40px;

  ${({ layout }) =>
    layout === "tiles"
      ? css`
          grid-template-rows: 1fr 1fr;
          grid-template-columns: 1fr 1fr;
          @media (${device.md}) {
            grid-template-rows: 1fr;
            grid-template-columns: 1fr;
          }
        `
      : css`
          grid-template-rows: 1fr;
          grid-template-columns: 1fr;
        `}

  @media (${device.md}) {
    margin: 0 20px;
  }
`;
