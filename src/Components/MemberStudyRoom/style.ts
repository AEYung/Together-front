import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  padding-top: 9vh;
  background: #f6f6f6;
  box-sizing: border-box;
`;

export const NoticeContainer = styled.div`
  margin: 0 auto;
  width: 54.22vw;
  height: 91vh;
  overflow: scroll;
  box-sizing: border-box;
  padding-top: 4vh;
`;

export const JoinButton = styled.button`
  position: absolute;
  right: 2.81vw;
  bottom: 5vh;
  width: 15.36vw;
  height: 6.2vh;
  outline: none;
  border: none;
  border-radius: 25px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
  background-color: #41a1b6;

  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;
