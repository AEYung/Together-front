/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from '../Header';
import * as C from '../';
import * as S from './style';
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
    </S.Container>
  );
}
