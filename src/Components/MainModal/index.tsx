/** @jsxImportSource @emotion/react */
import './style';
import * as S from "./style";

export default function MainModal(props: any) {
    const close = () => {
        return props.onClose()
    }
    return (
        <div css={S.Layout} onClick={close}>
            <div css={S.Box}>
                <div css={S.Boxtitle}><h1>리액트 공부하실 분</h1><span>2022/12/16</span></div>
                <p css={S.Writer}>작성자: 애영</p>
                <p css={S.Boxtext}>자바스크립트와 리액트를 함께 공부하실 분을 찾습니다. 자바스크립트와 리액트를 함께 공부하실 분을 찾습니다. 자바스크립트와 리액트를 함께 공부하실 분을 찾습니다. 자바스크립트와 리액트를 함께 공부하실 분을 찾습니다. 자바스크립트와 리액트를 함께 공부하실 분을 찾습니다. 자바스크립트와 리액트를 함께 공부하실 분을 찾습니다. 자바스크립트와 리액트를 함께 공부하실 분을 찾습니다.
                    <br /><br /><br />
                    사용 하는 기술: React, JavaScript, axios, Emotion.js
                    <br /><br />
                    자바스크립트에 대한 이해도가 충분히 있으신 분들과 함께 하고 싶습니다.</p>
                <div css={S.TagWrapper}><span>#tag1</span><span>#tag2</span><span>#tag3</span><span>#tag4</span></div>
                <div css={S.ButtonWrapper}><span css={S.ButtonStyle1} onClick={close}>닫기</span><span css={S.ButtonStyle2}>가입신청</span></div>
            </div>
        </div>
    )
}