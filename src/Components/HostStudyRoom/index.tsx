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
        <div css={{ cursor: 'pointer' }}>
          <I.Setting />
        </div>
      </S.Container>
    </>
  );
}
