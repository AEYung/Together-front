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
        {
          // 유저가 호스트라면?
          <WriteNoticeBox />
        }
        <C.NoticeBox />
        <C.NoticeBox />
        <C.NoticeBox />
        <C.NoticeBox />
        <C.NoticeBox />
        <C.NoticeBox />
      </S.NoticeContainer>
      <Link to={'/meeting-room'}>
        <S.JoinButton>회의실 참여</S.JoinButton>
      </Link>
    </S.Container>
  );
}

function WriteNoticeBox() {
  return (
    <S.NoticeBox>
      <S.WriteNotice
        placeholder="공지할 내용을 입력하세요."
        spellCheck="false"
      />
      <S.NoticeButton>등록</S.NoticeButton>
    </S.NoticeBox>
  );
}
