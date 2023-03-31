import styled from "styled-components";
import { device } from "../../../styles/breakPoints";

export const StyledIconLang = styled.div`
  min-width: 34px;
  padding: 3px 0 3px 2px;
  margin-left: 20px;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  background-color: #333;
  color: var(--white);
  letter-spacing: 2px;
  user-select: none;
  z-index: 4;
  border-radius: 3px;
  cursor: pointer;
  @media (${device.lg}) {
    font-size: 10px;
    padding: 2px 0 2px 2px;
    min-width: 30px;
    @media (${device.sm}) {
      margin-left: auto;
    }
  }
`;
