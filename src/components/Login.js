import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { authSliceActions } from "../store/slices/authSlice";

export const Login = () => {

    const isLogined = useSelector(state => state.auth.authenticated);
    const dispatch = useDispatch();
    const history = useHistory()
    const loginHandler = () => {
        dispatch(authSliceActions.login())
        history.push("/")
    }

    return (
        <React.Fragment>
            <div style={{margin: 50}}>
                <label>Username:</label><br/>
                <input type="text"/><br/>
                <label>Password:</label><br/>
                <input type="text"/><br/>
                <button onClick={loginHandler}>Login</button>
            </div>
        </React.Fragment>
    )
}