import './style';
import * as S from './style';
import * as I from '../../Asset/svg';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <S.Container>
      <I.NotFoundImg />
      <S.MessageBox>
        <S.NotiMessage>잘못된 주소로 들어왔어요!</S.NotiMessage>
        <Link to={'/'}>
          <S.MainBtn>
            <S.BtnText>메인페이지로 이동 </S.BtnText>
            <I.Arrow />
          </S.MainBtn>
        </Link>
      </S.MessageBox>
    </S.Container>
  );
}
