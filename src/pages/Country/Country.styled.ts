import styled, { css } from 'styled-components';

export const Article = styled.article<{ isGridView: boolean }>(
  ({ isGridView }) => css`
    ${isGridView &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `}
  `,
);

export const Section = styled.section<{ isGridView: boolean }>(
  ({ theme: { colors }, isGridView }) => css`
    cursor: pointer;
    display: flex;
    gap: 36px;
    margin: 48px 24px;

    ${isGridView &&
    css`
      flex-direction: column;
      gap: 18px;
      width: 300px;
    `}

    &:hover {
      h1 {
        color: ${colors.primary};
      }
    }
  `,
);

export const Wrapper = styled.div(
  ({ theme: { devices } }) => css`
    display: flex;
    flex-direction: column;
    flex: 1.5;
    gap: 16px;
    justify-content: space-between;

    @media (min-width: ${devices['480px']}) {
      flex: 3;
    }
  `,
);

export const Header = styled.header``;

export const ImgWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const Img = styled.img`
  border-radius: 4px;
  object-fit: contain;
  object-position: center;
  width: 100%;
`;

export const Title = styled.h1`
  transition: 0.3s;
`;

export const Footer = styled.footer`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Text = styled.p``;
