/** @jsxImportSource @emotion/react */
import './style';
import * as S from "./style";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { writeDetailState } from '../../Atoms';

let id = 0;
let title = '';
let description = '';
let hostName = '';
let maximum = '';
let currentCount = '';
let tags = [''];

export default function MainModal(props: any) {
    const close = () => {
        return props.onClose()
    }

    const num = props.id;
    const [writeDetail, setWriteDetail] = useRecoilState(writeDetailState);
    const [test, setTest] = useState('');
    const url = 'http://server.gsm-together.com:8080/studies/' + num
    console.log(props);
    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('AccessToken')
            }
        })
            .then(res => {
                console.log(res.data);
                setTest(res.data.title);
                id = (res.data.id);
                title = (res.data.title);
                description = (res.data.description);
                hostName = (res.data.hostName);
                maximum = (res.data.maximum);
                currentCount = (res.data.currentCount);
                tags = (res.data.tags);
            });
    }, []);

    return (
        <div css={S.Layout} onClick={close}>
            <div css={S.Box}>
                <div css={S.Boxtitle}><h1>{title}</h1><span>2022/12/16</span></div>
                <p css={S.Writer}>작성자: {hostName}</p>
                <p css={S.Boxtext}>{description}</p>
                <div css={S.TagWrapper}>
                    {tags.map((tags: any) => {
                        return (
                            <span key={tags.id}># {tags.content}</span>
                        );
                    })}
                </div>
                <div css={S.ButtonWrapper}><span css={S.ButtonStyle1} onClick={close}>닫기</span><span css={S.ButtonStyle2}>가입신청</span></div>
            </div>
        </div>
    )
}