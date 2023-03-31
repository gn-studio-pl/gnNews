import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { BsFlagFill } from 'react-icons/bs';

export const IconWrapper = styled.div(
  ({ theme: { colors } }) => css`
    align-items: center;
    background-color: ${colors.background};
    border-radius: 0 8px 8px 0;
    color: ${colors.primary};
    cursor: pointer;
    display: flex;
    height: 46px;
    justify-content: center;
    margin-top: 8px;
    position: fixed;
    width: 46px;
  `,
);

export const FlagIcon = styled(BsFlagFill)``;

export const ModalInner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  padding: 4px;
`;

export const Link = styled(RouterLink)(
  ({ theme: { colors } }) => css`
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 16px;
    padding: 8px;
    transition: 0.3s;

    &:hover {
      background-color: ${colors.primary};
    }
  `,
);

export const Img = styled.img``;

export const Country = styled.p`
  letter-spacing: 1px;
`;
