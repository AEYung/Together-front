/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from '../Header';
import NoticeBox from '../NoticeBox';
import * as S from './style';
export default function MemberStudyRoom() {
  return (
    <S.Background>
      <Header />
      <S.Container>
        <S.NoticeContainer>
          <NoticeBox />
          <NoticeBox />
          <NoticeBox />
          <NoticeBox />
          <NoticeBox />
          <NoticeBox />
        </S.NoticeContainer>
      </S.Container>
    </S.Background>
  );
}
