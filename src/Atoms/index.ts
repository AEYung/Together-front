import { atom } from 'recoil';


export const emailState = atom({
  key: 'Email',
  default: '',
});
export const emailCodeState = atom({
  key: 'EmailCode',
  default: '',
});
export const nameState = atom({
  key: 'Name',
  default: '',
});
export const passwordState = atom({
  key: 'Password',
  default: '',
});
export const repasswordState = atom({
  key: 'Repassword',
  default: '',
});
export const meetingChatState = atom({
  key: 'MeetingChat',
  default: '',
});
export const toggleBtnState = atom({
  key: 'ToggleBtn',
  default: '',
});
export const titleState = atom({
  key: 'Title',
  default: '',
});
export const textContentState = atom({
  key: 'TextContent',
  default: '',
});
export const maxMemberState = atom({
  key: 'maxMember',
  default: 0,
});
export const userQuestionState = atom({
  key: 'userQuestion',
  default: '',
})