import { createSlice } from "@reduxjs/toolkit";
import { login } from "../reducers/auth/login";
import { logout } from "../reducers/auth/logout";

const initialState = {
    authenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login,
        logout
    }
});

export const authSliceActions = authSlice.actions;

export default authSlice;