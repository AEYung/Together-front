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
      <S.JoinButton
        onClick={() => {
          window.location.replace('/meeting-room');
        }}
      >
        회의실 참여
      </S.JoinButton>
    </S.Container>
  );
}
