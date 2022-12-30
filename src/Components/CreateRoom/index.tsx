/** @jsxImportSource @emotion/react */
import './style';
import * as S from './style';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { toggleBtnState, titleState, textContentState, maxMemberState, userQuestionState } from '../../Atoms';
import lock from '../../Asset/Lock.jpg'
import unlock from '../../Asset/Unlock.jpg';
import { API } from '../../lib/API';
import { useEffect } from 'react';


const TryPost = () => {
    const [title, setTitle] = useRecoilState(titleState);
    const [textContent, setTextContent] = useRecoilState(textContentState);
    const [maxMember, setMaxMember] = useRecoilState(maxMemberState);
    const [locked, setLocked] = useRecoilState(toggleBtnState);
    const [userQuestion, setUserQuestion] = useRecoilState(userQuestionState);

    const onPost = async () => {
        let scope = 'ERROR'
        if(locked === lock){
            scope = 'PRIVATE'
        }
        else if(locked === unlock && userQuestion === ''){
            scope = 'PUBLIC'
        }
        else{
            scope = 'PERMISSION'
        }

        let maximum = +maxMember;
        
        if (title === '')
            return alert('제목이 입력되지 않았습니다.');
        else if (maxMember <= 1 || maxMember > 20) {
            return alert('룸 최대 인원이 지정되지 않았습니다.');
        }

        const url = "http://10.82.17.149:8080/studies";
        console.log(title);
        console.log(textContent);
        console.log(maximum);
        console.log(scope);
        console.log(userQuestion);
        await API.post(url, {
            title: title,
            description: textContent,
            maximum: maximum,
            scope: scope,
            question: userQuestion,
            tags: [],
        },
            {
                headers:{
                    Authorization: "Bearer " + localStorage.getItem('AccessToken')
                }
            }
        )
            .then(function (response) {
                console.log(response.data);
                alert("룸 생성에 성공했습니다!");
                window.location.href = '/'
            })
            .catch(function (error) {
                console.log(error);
                alert("룸 생성에 실패했습니다!");
            })
    };

    return {
        setTitle,
        setTextContent,
        setMaxMember,
        locked,
        setLocked,
        setUserQuestion,
        onPost,
    };
}


export default function CreateRoom() {
    const {
        setTitle,
        setTextContent,
        setMaxMember,
        locked,
        setLocked,
        setUserQuestion,
        onPost,
    } = TryPost();

    useEffect(() => {
        setLocked(unlock);
    },[])

    const changeName = () => {
        if (locked === unlock) {
            setLocked(lock);
        }
        else {
            setLocked(unlock);
        }
    }


    return (
        <div css={S.Positioner}>
            <div css={S.LockBtn} onClick={changeName}><img src={locked} alt='Lock' /></div>
            <div css={S.FlexContainer}>
                <input css={S.RoomTitle}
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='스터디룸 이름'
                    required
                />
                <div css={S.Roomtext}>
                    <p>설명*</p>
                    <textarea
                        onChange={(e) => setTextContent(e.target.value)}
                        placeholder='스터디룸에 대한 설명을 입력하세요.&#13;&#10;#을 이용해 태그를 입력할 수 있습니다. ex)#Together'
                    />
                </div>
                <div css={S.ApplicantQuestion}>
                    <p>신청자 질문 작성</p>
                    <input
                        type='text'
                        onChange={(e) => setUserQuestion(e.target.value)}
                        placeholder='ex)본인의 기술 스택을 입력해주세요.'
                    />
                </div>
                <div css={S.MemberNum}>
                    <p css={S.ItemText}>최대인원*</p>
                    <input
                        type='number'
                        min='2' max='20'
                        onChange={(e: any) => setMaxMember(e.target.value)}
                        placeholder='ex)18' />
                    <p css={S.SubString}>최소 2명, 최대 20명 참가 가능</p>
                </div>
                <div css={S.ButtonWrapper}>
                    <span css={S.ButtonStyle1}><Link to='/'>취소</Link></span>
                    <span css={S.ButtonStyle2} onClick={() => { onPost(); }} >생성</span>
                </div>
            </div>
        </div>
    )
}