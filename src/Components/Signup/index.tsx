/** @jsxImportSource @emotion/react */
import './style';
import * as S from './style';

export default function Signup(){
    return(
        <div css={S.Positioner}>
            <div css={S.LogoWrapper}>
                <img src={require('../../Asset/logo.png')} alt='logo' />
            </div>
            <div css={S.EmailContainer}>
                <input 
                    type="text"
                    placeholder="이메일"
                    required
                />
                <button>인증번호 받기</button>
            </div> 
            <div css={S.EmailContainer}>
                <input
                    type="text"
                    placeholder="인증번호 확인"
                    required
                />
                <button>인증 확인</button>
            </div>
            <input css={S.InputStyle}
                type="text"
                placeholder="닉네임"
                required
            />
            <input css={S.InputStyle}
                type="password"
                placeholder="비밀번호"
                required
            />
            <input css={S.InputStyle}
                type="password"
                placeholder="비밀번호 확인"
                required
            />
            <button css={S.ButtonStyle}>회원가입</button>
        </div>
    );
}