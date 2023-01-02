/** @jsxImportSource @emotion/react */
import './style';
import * as S from './style';
import { useState, useEffect } from 'react';
import { postListState } from '../../Atoms';
import { useRecoilState } from 'recoil';
import MainModal from '../MainModal/index';
import axios from 'axios';

let id = 0;

export default function WritingBox(props: any) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const [postList, setPostList] = useRecoilState(postListState);
    useEffect(() => {
        axios.get('http://server.gsm-together.com:8080/studies', {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('AccessToken')
            }
        })
            .then(res => {
                console.log(res.data);
                setPostList(res.data.list);
            });
    }, []);

    let id = 1;

    return (
        <div css={S.BoxList}>
            {postList.map((postList: any) => {
                let length = 150; // 표시할 글자수 기준
                let str = postList.description;
                if (str.length > length) {
                    str = str.substr(0, length - 2) + '...';
                }
                return (
                    <div key={postList.id} id={postList.id} onClick={openModal}>
                        <div css={S.WritingBox}>
                            <div css={S.Boxtext}>
                                <h1>{postList.title}</h1>
                                <p>{str}</p>
                                <div>
                                    {postList.tags.map((tags: any) => {
                                        return (
                                            <span key={tags.id}># {tags.content}</span>
                                        );
                                    })}
                                </div>
                            </div>
                            <span css={S.MemberNum}>{postList.currentCount}/{postList.maximum}</span>
                        </div>
                    </div>
                )
            })}
            {modalOpen && <MainModal id={id} onClose={closeModal} />}
        </div>
    )
}