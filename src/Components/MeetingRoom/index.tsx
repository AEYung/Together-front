/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import ChattingBox from '../ChattingBox';
import * as S from './style';
import * as I from '../../Asset/svg';
import { useState } from 'react';

export default function MeetingRoom() {
  window.history.forward();
  return (
    <S.Container>
      <UserBox />
      <ChattingBox />
    </S.Container>
  );
}

function UserBox() {
  const [mic, setMic] = useState<boolean>(false);
  const [headset, setHeadset] = useState<boolean>(false);
  const [video, setVideo] = useState<boolean>(false);

  const clickMic = () => setMic((prev) => !prev);
  const clickHeadset = () => setHeadset((prev) => !prev);
  const clickVideo = () => setVideo((prev) => !prev);

  const onClick = () => {
    if (window.confirm('정말 나가시겠습니까?')) {
      window.location.replace('/study-room');
    } else {
      return;
    }
  };

  return (
    <S.UserContainer>
      <S.UserContainerBox />
      <S.Text css={{ marginTop: '13px' }} onClick={onClick}>
        회의 나가기
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
      <S.Text css={{ alignSelf: 'flex-start', color: '#000' }}>
        참가인원: {'4'}
      </S.Text>
    </S.UserContainer>
  );
}
