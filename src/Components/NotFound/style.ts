import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MessageBox = styled.div`
  display: flex;
  align-items: center;
`;

export const NotiMessage = styled.p`
  font-weight: bold;
  margin-right: 11px;
`;

export const MainBtn = styled.div`
  display: flex;
  font-weight: bold;
  color: #41a1b6;
  cursor: pointer;

  &:active {
    filter: brightness(80%);
  }
`;

export const BtnText = styled.p`
  text-decoration: underline;
  margin-right: 4px;
`;
