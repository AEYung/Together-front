/** @jsxImportSource @emotion/react */
import './style';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';

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
            <span onClick={logout}><Link to="/signin">로그아웃</Link></span>
        </div>
    );
}

const RealNav = () => {
    const checkAuth = localStorage.getItem("AccessToken");
    if (checkAuth === null) {
        return <GuestNav />;
    }
    return <UserNav />;
}

const logout = () => {
    localStorage.clear();
}

export default function Header() {
    return (
        <div css={S.Positioner}>
            <div css={S.LogoWrapper}><img src={require('../../Asset/logo.png')} alt='logo' /></div>
            <RealNav />
        </div>
    );
}