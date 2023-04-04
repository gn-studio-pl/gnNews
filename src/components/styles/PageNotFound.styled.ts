import styled from "styled-components";

export const StlyedPageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  padding: 40px 20px;
  color: var(--grey);
  background-color: white;
  & span {
    display: block;
  }
`;

export const StyledErrorCode = styled.span`
  color: var(--red);
  font-size: 70px;
  font-weight: 700;
`;

export const StyledErrorMessage = styled.span`
  font-size: 18px;
`;

export const StyledRedirectToHome = styled.span`
  color: var(--secondBlue);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
