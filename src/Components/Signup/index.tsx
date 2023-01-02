/** @jsxImportSource @emotion/react */
import './style';
import * as S from './style';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { emailState, emailCodeState, nameState, passwordState, repasswordState } from '../../Atoms';
import axios from 'axios';

const TrySignup = () => {
    const [email, setEmail] = useRecoilState(emailState);
    const [emailCode, setEmailCode] = useRecoilState(emailCodeState);
    const [name, setName] = useRecoilState(nameState);
    const [password, setPassword] = useRecoilState(passwordState);
    const [repassword, setRePassword] = useRecoilState(repasswordState);

    const emailCheck = async () => {
        var emtext = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if (email === '')
            return alert('이메일이 입력되지 않았습니다.');
        else if (emtext.test(email) === false)
            return alert("이메일형식이 올바르지 않습니다.");

        const url = "http://server.gsm-together.com:8080/auth/mail";
        await axios.post(url, {
            email: email,
        })
            .then(function (response) {
                console.log(response.data);
                alert("인증정보 발송에 성공했습니다!");
            })
            .catch(function (error) {
                console.log(error);
                alert("인증정보 발송에 실패했습니다!");
            })
    }

    const authCheck = async () => {
        if (emailCode === '')
            return alert('잘못된 이메일코드입니다.');

        const url = "http://server.gsm-together.com:8080/auth/mail/verifying";
        await axios.post(url, {
            email: email,
            authCode: emailCode,
        })
            .then(function (response) {
                console.log(response.data);
                alert("인증에 성공했습니다!");
            })
            .catch(function (error) {
                console.log(error);
                alert("인증에 실패했습니다!");
            })

    }

    const onSignup = async () => {
        var pwtext = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

        if (email === '')
            return alert('이메일이 입력되지 않았습니다.');
        else if (name === '') {
            return alert('이름이 입력되지 않았습니다.');
        }
        else if (password === '')
            return alert('비밀번호가 입력되지 않았습니다.');
        else if (!pwtext.test(password))
            return alert("8~20자 영문 대소문자, 숫자, 특수문자를 사용하세요.");
        else if (password !== repassword)
            return alert('비밀번호가 서로 일치하지 않습니다.');

        const url = "http://server.gsm-together.com:8080/auth/signup";
        await axios.post(url, {
            email: email,
            name: name,
            password: password,
        })
            .then(function (res) {
                console.log(res.data);
                alert("회원가입에 성공했습니다!");
                window.location.href = "/signin";
            })
            .catch(function (err) {
                console.log(err.response.data);
                alert(err.response.data.msg);
            })
    };

    return {
        setEmail,
        setEmailCode,
        setName,
        setPassword,
        setRePassword,
        onSignup,
        emailCheck,
        authCheck,
    };
};


export default function Signup() {
    const {
        setEmail,
        setEmailCode,
        setName,
        setPassword,
        setRePassword,
        onSignup,
        emailCheck,
        authCheck,
    } = TrySignup();
    return (
        <div css={S.Backgrond}>
            <div css={S.Positioner}>
                <div css={S.LogoWrapper}>
                    <Link to="/"><img src={require('../../Asset/logo.png')} alt='logo' /></Link>
                </div>
                <div css={S.EmailContainer}>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일"
                        required
                    />
                    <button onClick={() => { emailCheck(); }}>인증번호 받기</button>
                </div>
                <span css={S.AlertText}>올바르지 않은 형식의 이메일입니다.</span>
                <div css={S.EmailContainer}>
                    <input
                        type="text"
                        onChange={(e) => setEmailCode(e.target.value)}
                        placeholder="인증번호 확인"
                        required
                    />
                    <button onClick={() => { authCheck(); }}>인증 확인</button>
                </div>
                <span css={S.AlertText}>올바르지 않은 인증번호입니다.</span>
                <input css={S.InputStyle}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="닉네임"
                    required
                />
                <span css={S.AlertText}>이미 존재하는 닉네임입니다.</span>
                <input css={S.InputStyle}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                    required
                />
                <span css={S.AlertText}>8~20자 영문 대소문자, 숫자, 특수문자를 사용하세요.</span>
                <input css={S.InputStyle}
                    type="password"
                    onChange={(e) => setRePassword(e.target.value)}
                    placeholder="비밀번호 확인"
                    required
                />
                <span css={S.AlertText}>비밀번호가 일치하지 않습니다.</span>
                <button css={S.ButtonStyle} onClick={() => { onSignup(); }}>회원가입</button>
            </div>
        </div>
    );
}