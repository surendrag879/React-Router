import { createSlice } from "@reduxjs/toolkit";
import { getLocalData, setLocalData } from "../Helpers/storage";
import AuthService from "./authService";

const user = getLocalData("user");

// Define the initial state
const initialState = {
    user: user,
    error: null,
    message: null,
    ...(user ? { isLoggedIn: true } : { isLoggedIn: false }),
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            // console.log('loginsuccess', state, action);
            state.isLoggedIn = true;
            state.user = action.payload;
            setLocalData("user", action.payload);
        },
        loginFail: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
            if (action?.payload) state.error = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            AuthService.logout();
        },
    },
});

// actions
export const { loginSuccess, loginFail, logout } = authSlice.actions;

export const login = ({ email, password }) =>
    async (dispatch) => {
        try {
            const response = await AuthService.login(email, password);
            if (response && response.status === 200 && response.data.success) {
                const { data } = response;
                const data1 = {
                    name: data.username,
                    email: data.email,
                    token: response.data.authorization,
                    message: data.message,
                };
                dispatch(loginSuccess(data1));
            } else if (!response.success) {
                dispatch(loginFail(response.message));
            } else {
                dispatch(loginFail(response.error.message));
            }
        } catch (err) {
            dispatch(loginFail(err.message));
        }
    };

// selector
export const selectAuth = (state) => state.auth;

// reducer
export default authSlice.reducer;