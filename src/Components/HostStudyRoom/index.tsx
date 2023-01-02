/** @jsxImportSource @emotion/react */
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
        <ApplicationStatus />
      </S.Container>
    </>
  );
}

function CopyInvitationCode() {
  const copyCode: string = 'jdsfy89po4lsdjf09p3o';

  const onClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('초대코드가 복사되었습니다!');
    } catch (e) {
      alert('초대코드 복사에 실패했습니다ㅜㅜ');
    }
  };
  return (
    <>
      <div css={{ display: 'flex', flexDirection: 'column' }}>
        <S.Title>초대코드</S.Title>
        <S.Descript>클릭하여 복사하기</S.Descript>

        <S.InvitationCodeBox>
          <span>{copyCode}</span>
          <S.CopyButton
            onClick={() => {
              onClick(copyCode);
            }}
          >
            <I.Copy />
          </S.CopyButton>
        </S.InvitationCodeBox>
      </div>
    </>
  );
}

function ApplicationStatus() {
  return (
    <>
      <div
        css={{ display: 'flex', flexDirection: 'column', marginTop: '8.24vh' }}
      >
        <S.Title>신청 현황</S.Title>
        <S.ApplyBox>
          <S.Name>JYG</S.Name>
          <S.Introduce>React, TS, Emotion 공부하고 있습니다.</S.Introduce>
          <S.DeleteButton>❌</S.DeleteButton>
          <S.AcceptButton>수락</S.AcceptButton>
        </S.ApplyBox>
      </div>
    </>
  );
}
