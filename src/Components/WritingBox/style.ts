/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const WritingBox = css`
    position: relative;
    box-sizing: border-box;
    width: 35vw;
    height: 20vh;
    border: #41A1B6 3px solid;
    border-radius: 10px;
    padding: 10px 10px 10px 20px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
` 

export const Boxtext = css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30vw;
    height: calc(20vh - 26px);
    h1{
        font-size: 20px;
        font-weight: bold;
    }
    p{
        font-size: 15.5px;
        line-height: 18px;
    }
    div{
        margin: 10px  0px 10px 0px;
        span{
            font-size: 14px;
            font-weight: bold;
            padding: 5px 10px 5px 10px;
            margin: 5px;
            border-radius: 20px;
            background-color: #f3f3f3;
        }
    }
`

export const MemberNum = css`
    position: absolute;
    top: 2vh;
    right: 1vw;
    color: #41A1B6;
`