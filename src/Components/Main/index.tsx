/** @jsxImportSource @emotion/react */
import WritingBox from '../WritingBox';
import './style';
import * as I from '../../Asset/svg';
import * as S from './style';

export default function Main() {
    return (
        <div css={S.Positioner}>
            <div css={S.FlexContainer}>
                <div css={S.SearchBox}>
                    <input placeholder='참가하고 싶은 스터디룸 이름을 검색해 보세요!' /><div><I.Search /></div>
                </div>
                <button css={S.ButtonStyle}>스터디룸 생성</button>
                <div css={S.BoxList}>
                    <WritingBox />
                    <WritingBox />
                    <WritingBox />
                    <WritingBox />
                    <WritingBox />
                    <WritingBox />
                    <WritingBox />
                    <WritingBox />
                </div>
            </div>
        </div>
    );
}