import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Text = styled.p`
  text-indent: 6px;
`;

export const BiggerText = styled(Text)`
  font-size: 18px;
  letter-spacing: 1px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  border-radius: 8px;
  margin-top: 8px;
  width: 90%;
`;
