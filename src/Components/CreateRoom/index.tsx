/** @jsxImportSource @emotion/react */
import './style';
import * as S from './style';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { toggleBtnState } from '../../Atoms';
import lock from '../../Asset/Lock.jpg'
import unlock from '../../Asset/Unlock.jpg';

export default function CreateRoom() {
    const [locked, setLocked] = useRecoilState(toggleBtnState);
    if (locked === ''){
        setLocked(unlock);
    } 
    const changeName = () => {
        let value = locked;

        if(value === unlock){
            setLocked(lock);
        }
        else{
            setLocked(unlock);
        }
    }
    
    
    return (
        <div css={S.Positioner}>
            <div css={S.LockBtn} onClick={changeName}><img src={locked} alt='Lock' /></div>
            <div css={S.FlexContainer}>
                <input css={S.RoomTitle} type='text' placeholder='스터디룸 이름' />
                <div css={S.Roomtext}>
                    <p>설명*</p>
                    <textarea placeholder='스터디룸에 대한 설명을 입력하세요.&#13;&#10;#을 이용해 태그를 입력할 수 있습니다. ex)#Together' />
                </div>
                <div css={S.ApplicantQuestion}>
                    <p>신청자 질문 작성</p>
                    <input type='text' placeholder='ex)본인의 기술 스택을 입력해주세요.' />
                </div>
                <div css={S.MemberNum}>
                    <p css={S.ItemText}>최대인원*</p>
                    <input type='number' min='2' max='20' placeholder='ex)18' />
                    <p css={S.SubString}>최소 2명, 최대 20명 참가 가능</p>
                </div>
                <div css={S.ButtonWrapper}>
                    <span css={S.ButtonStyle1}><Link to='/'>취소</Link></span>
                    <span css={S.ButtonStyle2}>생성</span>
                </div>
            </div>
        </div>
    )
}