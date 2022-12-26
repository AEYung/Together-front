/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import * as S from './style';
import * as I from '../../Asset/svg';
import { useState } from 'react';

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
  const [mic, setMic] = useState<boolean>(false);
  const [headset, setHeadset] = useState<boolean>(false);
  const [video, setVideo] = useState<boolean>(false);

  const clickMic = () => setMic((prev) => !prev);
  const clickHeadset = () => setHeadset((prev) => !prev);
  const clickVideo = () => setVideo((prev) => !prev);

  return (
    <S.UserContainer>
      <S.UserContainerBox />
      <S.Text css={{ marginTop: '13px' }}>
        <Link css={{ color: '#E21616' }} to={'/'}>
          회의 나가기
        </Link>
      </S.Text>
      <S.ButtonBox>
        <S.Button onClick={clickMic}>
          {!mic ? <I.OffMic /> : <I.OnMic />}
        </S.Button>
        <S.Button onClick={clickHeadset}>
          {!headset ? <I.OffHeadset /> : <I.OnHeadset />}
        </S.Button>
        <S.Button onClick={clickVideo}>
          {!video ? <I.OffVideo /> : <I.OnVideo />}
        </S.Button>
      </S.ButtonBox>
      <S.Text css={{ alignSelf: 'flex-start' }}>참가인원: {'4'}</S.Text>
    </S.UserContainer>
  );
}
