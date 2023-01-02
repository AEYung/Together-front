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
  color: #fff;

  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export const NoticeBox = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #41a1b6;
  border-radius: 10px;
  width: 72.72%;
  height: 11.57vh;
  max-width: 757px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 32px 50px;
  margin: 0 auto 30px auto;
  font-size: 1.25rem;
  box-sizing: border-box;
`;

export const WriteNotice = styled.textarea`
  font-size: 1.125rem;
  position: absolute;
  left: 2%;
  width: 90%;
  height: 90%;
  padding: 0 5px;
  box-sizing: border-box;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const NoticeButton = styled.button`
  font-size: 1.125rem;
  position: absolute;
  right: 1%;
  bottom: 3%;
  border: none;
  background: none;
  color: #41a1b6;
  font-weight: 600;
`;
