/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const Positioner = css`
    width: 100vw;
    height: 9vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
`

export const LogoWrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3.5vw;

    img{
        width: 190px;
    }

`

export const NavWrapper = css`
    font-weight: bold;
    margin-right: 3.5vw;
    span{
        margin-left: 2.5vw;
    }
    a{
        color: black;
    }
`