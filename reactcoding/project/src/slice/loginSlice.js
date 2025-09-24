import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {loginPost} from '../api/memberApi'
import { removeCookie,getCookie, setCookie } from "../util/cookieUtil";

const initState = {
    email:''
};
const loadMemberCookie = () => {
    const memberInfo = getCookie("member");
    //닉네임처리
    if(memberInfo && memberInfo.nickname) {
        memberInfo.nickname = decodeURIComponent(memberInfo.nickname);
    }
    return memberInfo;
}
export const loginPostAsync = createAsyncThunk('loginPostAsync',(param) => {
    return loginPost(param);
});

const loginSlice = createSlice({
    name: 'LoginSlice',
    //initialState: initState,
    initialState:loadMemberCookie() || initState,  //쿠카가 없으면 초기값 사용
    reducers:{
        login:(state, action) => {
            console.log("로그인...");

            //email, pw로 구성
            const data = action.payload;
            //새로운 값
            return {email: data.email};
        },
        logout:(state, action) => {
            console.log("로그아웃....");
            removeCookie("member");
            return {...initState};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginPostAsync.fulfilled,(state, action) =>{
            console.log("fulfilled: 완료");

            const payload = action.payload;
            if (!payload.error) {
                console.log("쿠키 저장");
                setCookie("member", JSON.stringify(payload), 1); //1일
            }
            return payload;
        })
        .addCase(loginPostAsync.pending,(state, action) =>{
            console.log("pending: 처리중")
        })
        .addCase(loginPostAsync.rejected,(state, action) =>{
            console.log("rejected: 오류")
        });
    }
});

export const {login, logout} = loginSlice.actions;
export default loginSlice.reducer;