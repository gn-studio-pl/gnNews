import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  justify-content: center;
  width: 100%;
`;

export const Author = styled.h3`
  text-align: center;
`;

export const Text = styled.p``;

export const Link = styled.a(
  ({ theme: { colors } }) => css`
    color: ${colors.primary};
    text-align: center;

    &:hover {
      text-decoration: underline;
    }
  `
);
