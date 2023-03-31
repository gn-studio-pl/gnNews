import styled, { css } from 'styled-components';

export const Container = styled.footer(
  ({ theme: { colors } }) => css`
    align-items: center;
    background-color: ${colors.background};
    border-top: 2px solid ${colors.primary};
    color: ${colors.font};
    display: flex;
    gap: 8px;
    justify-content: space-between;
    padding: 0 8px;
  `,
);

export const Text = styled.p`
  letter-spacing: 1px;
`;
