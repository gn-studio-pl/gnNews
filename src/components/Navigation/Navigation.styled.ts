import { AiFillBulb } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import { BsFillGrid3X3GapFill, BsListStars } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Nav = styled.nav(
  ({ theme: { colors } }) => css`
    align-items: center;
    background-color: ${colors.background};
    border-bottom: 2px solid ${colors.primary};
    color: ${colors.font};
    display: flex;
    justify-content: space-between;
    min-height: 40px;
    padding: 0 12px;
  `
);

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
`;

export const Link = styled(RouterLink)(
  ({ theme: { colors } }) => css`
    padding: 4px;
    text-underline-offset: 4px;
    transition: 0.3s;

    &:hover {
      color: ${colors.primary};
    }
  `
);

export const Strong = styled.strong(
  ({ theme: { colors } }) => css`
    color: ${colors.primary};
  `
);

const iconStyles = css(
  ({ theme: { colors } }) => css`
    color: ${colors.font};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${colors.primary};
    }
  `
);

export const GridIcon = styled(BsFillGrid3X3GapFill)`
  ${iconStyles}
`;

export const ListIcon = styled(BsListStars)`
  ${iconStyles}
`;

export const PopupIcon = styled(AiFillBulb)`
  ${iconStyles}
`;

export const LanguageIcon = styled(MdOutlineLanguage)`
  ${iconStyles}
`;

export const LanguageWrapper = styled.div`
  ${iconStyles}
  align-items: center;
  display: flex;
  gap: 8px;
  min-width: 45px;
`;

export const Text = styled.p``;
