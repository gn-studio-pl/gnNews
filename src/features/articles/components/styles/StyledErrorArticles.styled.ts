import styled from "styled-components";

export const StyledErrorArticles = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  position: relative;
  width: fit-content;
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  padding: 30px 40px;
  border-radius: 10px;
  background-color: #f44336;
  opacity: 0.9;
  & h2 {
    font-weight: 800;
    font-size: 16px;
    color: var(--white);
    &::first-letter {
      text-transform: uppercase;
    }
    &::after {
      content: " !";
      position: relative;
    }
  }

  & span {
    display: block;
    margin-top: 20px;
    font-weight: 500;
    font-size: 12px;
    color: var(--white);
  }
`;
