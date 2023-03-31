import styled from "styled-components";
import { device } from "../../styles/breakPoints";

export const StyledWrapperNavigationlist = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: auto;
  height: auto;
  left: -30px;
  overflow-y: scroll;
  direction: rtl;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(90, 90, 90);
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }
  @media (${device.md}) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
`;
