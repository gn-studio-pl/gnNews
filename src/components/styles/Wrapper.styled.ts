import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: ${({ style }) => style?.display || "flex"};
  align-items: ${({ style }) => style?.alignItems || "center"};
  height: ${({ style }) => style?.height || "fit-content"};
`;
