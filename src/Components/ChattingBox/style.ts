import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 24.06vw;
  height: 93.12vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #ffffff;
  border: 2px solid #41a1b6;
  border-radius: 20px;
  overflow: hidden;
`;

export const Image = styled.img`
  scale: 0.7;
  align-self: center;
  margin: 20px 0 20px 0;
`;

export const InputContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 24.06vw;
  height: 150px;
  border-top: 1px solid #b0b0b0;
`;

export const SubmitButton = styled.input`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background: white;
  font-size: 1.13rem;
  font-weight: 600;
  color: #41a1b6;
  cursor: pointer;
`;

export const InputMessage = styled.textarea`
  width: 90%;
  height: 143px;
  border: none;
  padding: 15px 0 0 15px;
  border-radius: 0 20px;
  box-sizing: border-box;
  font-size: 1.13rem;
  resize: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  &:focus {
    outline: none;
  }
`;

export const MessageBox = styled.div`
  width: max-content;
  max-width: 273px;
  padding: 10px;
  margin-right: 6.28%;
  background: #c4f2fd;
  border-radius: 10px;
  word-break: break-all;
  align-self: flex-end;
  line-height: 1.3;
`;
