import styled from "styled-components";
import { device } from "../../styles/breakPoints";

export const StyledContentPopup = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(90, 90, 90);
    border-radius: 0 50px 50px 0;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0 50px 50px 0;
  }
  @media (${device.sm}) {
    padding-top: 10px;
    ::-webkit-scrollbar-thumb {
      background: rgba(90, 90, 90);
      border-radius: 0 50px 0 0;
    }
    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 0 50px 0 0;
    }
  }
`;
