import { atom } from "recoil"

export const emailState = atom({
    key: "Email",
    default: "",
})
export const emailCodeState = atom({
    key: "EmailCode",
    default: "",
})
export const nameState = atom({
    key: "Name",
    default: "",
})
export const passwordState = atom({
    key: "Password",
    default: "",
})
export const repasswordState = atom({
    key: "Repassword",
    default: "",
})