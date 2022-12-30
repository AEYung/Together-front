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

export const ApplyBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 17.14vw;
  height: max-content;
  min-height: 5.09vh;
  margin-top: 18px;
  padding-left: 15px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 1.125rem;
  margin-right: 7.6%;
`;

export const Introduce = styled.span`
  font-weight: 400;
  width: 66.87%;
  padding: 8.24% 0;
  box-sizing: border-box;
`;

export const DeleteButton = styled.button`
  font-weight: 600;
  border: none;
  background: none;
  position: absolute;
  top: 6%;
  right: 1%;
`;

export const AcceptButton = styled.button`
  color: #41a1b6;
  position: absolute;
  bottom: 6%;
  right: 1%;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  background: none;
`;
