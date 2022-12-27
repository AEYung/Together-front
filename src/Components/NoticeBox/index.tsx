/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from '../../Asset/svg';

export default function NoticeBox() {
  return (
    <S.Container>
      <S.Title>title</S.Title>
      <S.Contents>
        오늘 로스트아크 때문에 스터디 참여가 힘드니 너네들이 알아서 진행하세요
        오늘 개인사정 때문에 스터디 참여가 힘드니 너네들이 알아서 진행하세요
        오늘 개인사정 때문에 스터디 참여가 힘드니 너네들이 알아서 진행하세요
        오늘 개인사정 때문에 스터디 참여가 힘드니 너네들이 알아서 진행하세요
        오늘 개인사정 때문에 스터디 참여가 힘드니 너네들이 알아서
      </S.Contents>
      <S.Comments>
        <I.Comment />
        <div css={{ marginLeft: '6px' }}>3</div>
      </S.Comments>
    </S.Container>
  );
}
