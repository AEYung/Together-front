/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const Backgrond = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(-60deg, #A0C9D2 50%, #FFFFFF 50%);
`

export const Positioner = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 21vw;
    height: 100vh;
`

export const LogoWrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1vw;

    img{
        width:100%;
    }
`

export const EmailContainer = css`
    display: flex;
    flex-direction: row;
    align-items: center; 
    margin-top: 1vw;

    input{
        width: 15vw;
        height: 6vh;
        outline: none;
		border: #41A1B6 2px solid;
        border-radius: 7.5px;
        box-sizing: border-box;
        box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
        padding-left: 1vw;
        margin-right: 0.5vw;
    }

    button{
        width: 5.5vw;
        height: 6vh;
		outline: none;
        border: none;
        border-radius: 7.5px;
		background-color: #41A1B6;
        box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
		color: #FFFFFF;
    }
`

export const InputStyle = css`
    width: 21vw;
    height: 6vh;
    outline: none;
    border: #41A1B6 2px solid;
    border-radius: 7.5px;
    box-sizing: border-box;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
    padding-left: 1vw;
    margin-top: 1vw;
`

export const AlertText = css`
    opacity: 0;
    color: #E21616;
    font-size: 13px;
    align-self: flex-start;
    margin-top: 5px;
`

export const ButtonStyle = css`
    width: 21vw;
    height: 6vh;
    outline: none;
    border: none;
    border-radius: 25px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
    background-color: #41A1B6;
    margin: 1.5vw;
    color: white;
    font-size: 19px;
    font-weight: bold;
`