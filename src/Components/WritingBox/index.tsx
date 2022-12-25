/** @jsxImportSource @emotion/react */
import './style';
import * as S from './style';

export default function WritingBox(){
    let lenth = 85;
    let str = '자바스크립트와 리액트를 함께 공부하실 분을 찾습니다. 자바스크립트와 리액트를 함께 공부하실 분을 찾습니다. 자바스크립트와 리액트를 함께 공부하실 분을 찾습니다. 자바스크립트와 리액트를 함께 공부하실 분을 찾습니다. 자바스크립트와 리액트를 함께 공부하실 분을 찾습니다. 자바스크립트와 리액트를 함께 공부하실 분을 찾습니다. 자바스크립트와 리액트를 함께 공부하실 분을 찾습니다.';
    if (str.length > lenth){
        str = str.substr(0, lenth - 2) + '...';
    }

    return (
        <div css={S.WritingBox}>
            <div css={S.Boxtext}>
                <h1>Title</h1>
                <p>{str}</p>
                <div>
                    <span>#Tag1</span>
                    <span>#Tag2</span>
                    <span>#Tag3</span>
                    <span>#Tag4</span>
                </div>
            </div>
            <span css={S.MemberNum}>1/15</span>
        </div>
    )
}