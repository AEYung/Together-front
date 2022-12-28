/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const Layout = css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.25);
    z-index: 1000;
    overflow: hidden;
    display: flex;
    justify-content : center;
    align-items: center;
`

export const Box = css`
    width: 60%;
    height: 70%;
    padding: 4vw 5vw 4vw 5vw;
    box-sizing: border-box;
    border-radius: 30px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Boxtitle = css`
    width: 100%;
    height: 6.5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: #E5FAFF 3px solid;
    padding: 0vh 3vw 1.5vh 3vw;
    box-sizing: border-box;
    h1{
        font-size: 30px;
        font-weight: bold;
        line-height: 5vh;
    }
    span{
        line-height: 7.5vh;
    }
`

export const Writer = css`
    align-self: flex-end;
    margin: 1vw 3vw 1vw 3vw;
    font-size: 14px;
`

export const Boxtext = css`
    margin: 1vw 3vw 1vw 3vw;
    align-self: flex-start;
    text-align: left;
    font-size: 16px;
    line-height: 22.5px;
`

export const TagWrapper = css`
    align-self: flex-start;
    margin: 1vw 3vw 1vw 3vw;
    span{
        font-size: 14px;
        font-weight: bold;
        padding: 5px 10px 5px 10px;
        margin: 5px;
        border-radius: 20px;
        background-color: #f3f3f3;
    }
`

export const ButtonWrapper = css`
    width: 60%;
    padding: 0 20px 0px 20px;
    margin: 5vh 0px 0px 0px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const ButtonStyle1 = css`
    width: 10vw;
    height: 5.5vh;
    border: none;
    color: #41A1B6;
    background: white;
    text-align: center;
    line-height: 5.5vh;
    border-radius: 30px;
    border: #41A1B6 2.5px solid;
    box-sizing: border-box;
    a{
        color: #41A1B6;
    }
    cursor: pointer;
`

export const ButtonStyle2 = css`
    width: 10vw;
    height: 5.5vh;
    border: none;
    color: white;
    background: #41A1B6;
    text-align: center;
    line-height: 5.5vh;
    border-radius: 30px;
    a{
        color: #41A1B6;
    }
    cursor: pointer;
`