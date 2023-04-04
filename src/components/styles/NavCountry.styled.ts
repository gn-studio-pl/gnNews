import styled from "styled-components";

export const StyledNameCountry = styled.span`
  width: fit-content;
  color: var(--grey);
  font-weight: 600;
  margin-left: 25px;
  transition: 0.15s ease-in-out;
`;

export const StyledWrapperNavCountry = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin-left: 20px;
  cursor: pointer;
  height: fit-content;
  transition: 0.15s ease-in-out;
  &:hover {
    box-shadow: -8px 10px 3px -10px var(--blue);
    ${StyledNameCountry} {
      margin-left: 20px;
    }
  }
`;

export const StyledFlag = styled.img`
  width: 35px;
`;
