/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import * as S from './style';
import * as I from '../../Asset/svg';
export default function MeetingRoom() {
  return (
    <div
      css={css`
        background: #f1f1f1;
      `}
    >
      <UserBox />
    </div>
  );
}

function UserBox() {
  return (
    <S.UserContainer>
      <S.UserContainerBox />
      <S.Text css={{ marginTop: '13px' }}>
        <Link css={{ color: '#E21616' }} to={'/'}>
          회의 나가기
        </Link>
      </S.Text>
      <S.ButtonBox>
        <S.Button>
          <I.OffMic />
        </S.Button>
        <S.Button>
          <I.OffHeadset />
        </S.Button>
        <S.Button>
          <I.OffVideo />
        </S.Button>
      </S.ButtonBox>
      <S.Text css={{ alignSelf: 'flex-start' }}>참가인원: {'4'}</S.Text>
    </S.UserContainer>
  );
}
