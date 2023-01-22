import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogin: false,
    },
    reducers: {
        switchLogin: (state) => {
            state.isLogin = !state.isLogin
        }
    }
})

export default authSlice.reducer;

export const {switchLogin} = authSlice.actions;