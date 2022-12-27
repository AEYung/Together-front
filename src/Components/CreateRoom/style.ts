/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const Positioner = css`
    width: 100%;
    margin-top: 9vh;
`

export const FlexContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 91vh;
    margin: 0px 10% 0px 10%;
`

export const RoomTitle = css`
    width: 40%;
    height: 75px;
    padding: 0px 20px 0px 20px;
    border: 0px;
    border-bottom: #E5FAFF 5px solid;
    box-sizing: border-box;
    font-size: 32.5px;
    text-align: center;
    font-weight: bold;
    outline: none;
`

export const Roomtext = css`
    width:  40%;
    margin: 10px;
    p{
        font-size: 14px;
        font-weight: bold;
        color: #41A1B6;
        margin: 10px 0px 10px 0px;
    }
    textarea{
        width:  100%;
        height: 15vw;
        resize: none;
        padding: 10px;
        background-color: #EFEFEF;
        border: none;
        border-radius: 10px;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        outline: none;
    }
`

export const ApplicantQuestion = css`
    width:  40%;
    margin: 10px;
    p{
        font-size: 14px;
        font-weight: bold;
        color: #41A1B6;
        margin: 10px 0px 10px 0px;
    }
    input{
        width: 100%;
        height: 2.5vw;
        padding: 10px;
        background-color: #EFEFEF;
        border: none;
        border-radius: 10px;
        box-sizing: border-box;
        font-size: 14px;
        outline: none;
    }
`

export const MemberNum = css`
    width:  40%;
    margin: 10px;
    input{
        width: 30%;
        height: 2.5vw;
        padding: 10px;
        background-color: #EFEFEF;
        border: none;
        border-radius: 10px;
        box-sizing: border-box;
        font-size: 14px;
        outline: none;
    }
`
export const ItemText = css`
    font-size: 14px;
    font-weight: bold;
    color: #41A1B6;
    margin: 10px 0px 10px 0px;
`

export const SubString = css`
    font-size: 12px;
    color: #9D9D9D;
    margin: 5px 0px 5px 0px;
`

export const ButtonWrapper = css`
    width: 40%;
    padding: 0 20px 0px 20px;
    margin: 5vh 0px 0px 0px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const ButtonStyle1 = css`
    width: 11vw;
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
`

export const ButtonStyle2 = css`
    width: 11vw;
    height: 5.5vh;
    border: none;
    color: white;
    background: #41A1B6;
    text-align: center;
    line-height: 5.5vh;
    border-radius: 30px;
`

export const LockBtn = css`
    position: absolute;
    top:12vh;
    right: 34vw;
`