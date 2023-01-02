/** @jsxImportSource @emotion/react */
import WritingBox from '../WritingBox';
import './style';
import { Link } from 'react-router-dom';
import * as I from '../../Asset/svg';
import * as S from './style';

export default function Main() {
    return (
        <div css={S.Positioner}>
            <div css={S.FlexContainer}>
                <div css={S.SearchBox}>
                    <input type='text' placeholder='참가하고 싶은 스터디룸 이름을 검색해 보세요!' /><div><I.Search /></div>
                </div>
                <span css={S.ButtonStyle}><Link to='/createRoom'>스터디룸 생성</Link></span>
                <WritingBox />
            </div>
        </div>
    );
}