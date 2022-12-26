/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const Positioner = css`
    width: 100%;
    margin-top: 9vh;
`

export const FlexContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    padding: 2.5vw 10% 2.5vw 10%;
`

export const SearchBox = css`
    width: 33vw;
    height: 50px;
    border-radius: 30px;
    background-color: #EFEFEF;
    border: rgba(0, 0, 0, 0.1) 1px solid;

    input{
        float: left;
        width: calc(29.5vw - 50px);
        height: 50px;
        border: none;
        outline: none;
        background-color: #EFEFEF;
        padding: 0px;
        margin: 0px 0px 0px 2vw;
        font-size: 17px;
        font-weight: bold;
    }

    div{
        float: right;
        width: 50px;
        height: 50px;
        margin: 0px 1vw 0px 0.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ButtonStyle = css`
    align-self: flex-end;
    width: 10vw;
    height: 5.5vh;
    outline: none;
    border: none;
    border-radius: 30px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
    background-color: #41A1B6;
    margin: 1.5vw;
    color: white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
`
export const BoxList = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5vw;
    grid-row-gap: 2.5vw;
`
