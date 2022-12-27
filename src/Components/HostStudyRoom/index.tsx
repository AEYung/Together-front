/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MemberStudyRoom from '../MemberStudyRoom';
import * as I from '../../Asset/svg';
import * as S from './style';

export default function HostStudyRoom() {
  return (
    <>
      <MemberStudyRoom />
      <S.Container>
        <div css={{ cursor: 'pointer', alignSelf: 'flex-end' }}>
          <I.Setting />
        </div>
        <CopyInvitationCode />
      </S.Container>
    </>
  );
}

function CopyInvitationCode() {
  return (
    <>
      <div css={{ display: 'flex', flexDirection: 'column' }}>
        <S.Title>초대코드</S.Title>
        <S.Descript>클릭하여 복사하기</S.Descript>

        <S.InvitationCodeBox>
          <span>jdsfy89po4lsdjf09p3o</span>
          <S.CopyButton>
            <I.Copy />
          </S.CopyButton>
        </S.InvitationCodeBox>
      </div>
    </>
  );
}
