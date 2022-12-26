import { FormEvent } from 'react';
import * as S from './style';

export default function ChattingBox() {
  return (
    <S.Container>
      <S.Image src={require('../../Asset/logo.png')}></S.Image>
      <MessageBox />
      <S.InputContainer>
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
          }}
        >
          <S.SubmitButton type="submit" value={'전송'} />
          <S.InputMessage
            spellCheck="false"
            placeholder="메세지를 입력해주세요"
          />
        </form>
      </S.InputContainer>
    </S.Container>
  );
}

function MessageBox() {
  return (
    <>
      <S.MessageBox>
        애영애영애영애여애영애영애영애영애여애영애영애영애영애여애영
      </S.MessageBox>
    </>
  );
}
