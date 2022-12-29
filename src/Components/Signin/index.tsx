/** @jsxImportSource @emotion/react */
import './style';
import * as S from './style';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { emailState, passwordState } from '../../Atoms';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const TrySignin = () => {
    const [email, setEmail] = useRecoilState(emailState);
    const [password, setPassword] = useRecoilState(passwordState);
    const navigate = useNavigate();

    const onSignin = async () => {
        if (email === '')
            return alert('이메일이 입력되지 않았습니다.');
        else if (password === '')
            return alert('비밀번호가 입력되지 않았습니다.');

        const url = "http://10.82.17.149:8080/auth";
        await axios.post(url, {
            email: email,
            password: password,
        })
        .then(function(res) {
            console.log(res.data);
            localStorage.setItem('AccessToken', res.data.accessToken);
            localStorage.setItem('RefreshToken', res.data.refreshToken);
            localStorage.setItem('expiredTime', res.data.expiredAt);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.accessToken;
            alert("로그인에 성공했습니다!");
            navigate("/")
        })
        .catch(function(err) {
            console.log(err);
            alert("로그인에 실패했습니다.");
        })
    };

    return {
        setEmail,
        setPassword,
        onSignin
    };
}

export default function Signin() {
    const {
        setEmail,
        setPassword,
        onSignin,
    } = TrySignin();
    return (
        <div css={S.Backgrond}>
            <div css={S.Positioner}>
                <div css={S.LogoWrapper}>
                    <Link to="/"><img src={require('../../Asset/logo.png')} alt='logo' /></Link>
                </div>
                <input css={S.InputStyle}
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일"
                    required
                />
                <span css={S.AlertText}>존재하지 않는 이메일입니다.</span>
                <input css={S.InputStyle}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                    required
                />
                <span css={S.AlertText}>비밀번호가 일치하지 않습니다.</span>
                <button css={S.ButtonStyle} onClick={() => { onSignin(); }}>로그인</button>
                <div css={S.GoToSignup}>
                    <span>계정이 없으신가요?</span>
                    <span><Link to="/signup">회원가입</Link></span>
                </div>
            </div>
        </div>
    );
}