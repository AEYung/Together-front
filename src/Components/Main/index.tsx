/** @jsxImportSource @emotion/react */
import WritingBox from '../WritingBox';
import './style';
import { Link } from 'react-router-dom';
import * as I from '../../Asset/svg';
import * as S from './style';
import { useState } from 'react';
import MainModal from '../MainModal/index';

export default function Main() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
  

    return (
        <div css={S.Positioner}>
            <div css={S.FlexContainer}>
                <div css={S.SearchBox}>
                    <input type='text' placeholder='참가하고 싶은 스터디룸 이름을 검색해 보세요!' /><div><I.Search /></div>
                </div>
                <span css={S.ButtonStyle}><Link to='/createRoom'>스터디룸 생성</Link></span>
                <div css={S.BoxList}>
                    <div onClick={openModal}>
                        <WritingBox />
                    </div>
                    <div>
                        <WritingBox />
                    </div>
                    <div>
                        <WritingBox />
                    </div>
                    <div>
                        <WritingBox />
                    </div>
                    <div>
                        <WritingBox />
                    </div>
                    <div>
                        <WritingBox />
                    </div>
                    <div>
                        <WritingBox />
                    </div>
                </div>
                {modalOpen && <MainModal onClose={closeModal}/>}
            </div>
        </div>
    );
}