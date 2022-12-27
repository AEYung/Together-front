/** @jsxImportSource @emotion/react */
import Header from '../Header';
import * as C from '../';
import * as S from './style';
import { Link } from 'react-router-dom';

export default function MemberStudyRoom() {
  return (
    <S.Container>
      <Header />
      <C.MemberList />
      <S.NoticeContainer>
        <C.NoticeBox />
        <C.NoticeBox />
        <C.NoticeBox />
        <C.NoticeBox />
        <C.NoticeBox />
        <C.NoticeBox />
      </S.NoticeContainer>
      <S.JoinButton>
        <Link to={'/meeting-room'} css={{ color: '#fff' }}>
          회의실 참여
        </Link>
      </S.JoinButton>
    </S.Container>
  );
}
