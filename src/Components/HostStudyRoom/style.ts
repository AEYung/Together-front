import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 11.11vh;
  right: 2.81vw;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  margin-top: 18px;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Descript = styled.span`
  font-size: 0.69rem;
  color: #9d9d9d;
`;

export const InvitationCodeBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 17.14vw;
  height: 4.63vh;
  margin-top: 18px;
  padding-left: 15px;
  box-sizing: border-box;
  background: #ececec;
  border-radius: 10px;
  overflow: hidden;
`;

export const CopyButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 15px;
`;
