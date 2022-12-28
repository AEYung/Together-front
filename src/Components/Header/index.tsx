/** @jsxImportSource @emotion/react */
import './style';
import * as S from './style';
import { Link } from 'react-router-dom';

function GuestNav() {
    return (
        <div css={S.NavWrapper}>
            <span><Link to="/signin">로그인</Link></span>
            <span><Link to="/signup">회원가입</Link></span>
        </div>
    );
}

function UserNav() {
    return (
        <div css={S.NavWrapper}>
            <span><Link to="/">홈으로</Link></span>
            <span>마이페이지</span>
            <span>로그아웃</span>
        </div>
    );
}

function RealNav(props: { isLoggedIn: any; }) {
    if (props.isLoggedIn) {
        return <UserNav />;
    }
    return <GuestNav />;
}

export default function Header() {
    return (
        <div css={S.Positioner}>
            <div css={S.LogoWrapper}><Link to='/'><img src={require('../../Asset/logo.png')} alt='logo' /></Link></div>
            <RealNav isLoggedIn={false} />
        </div>
    );
}