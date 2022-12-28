import { createSlice } from '@reduxjs/toolkit';
import { setLocalData, getLocalData } from '../helper/storage';

let user = getLocalData('user');
const initialState = {
    user: user | null,
    ...(user ? { isLoggedIn: true } : { isLoggedIn: false }),
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
            setLocalData("user", action.payload);

        },
        // loginFailed: (state, action) => {
        //     state.isLoggedIn = false;
        //     state.user = null;
        //     if (action?.payload) state.error = action.payload;
        // },
    }
})

//selector
export const selectAuth = (state) => state.auth;
export const { loginSuccess} = authSlice.actions;
export default authSlice.reducer;