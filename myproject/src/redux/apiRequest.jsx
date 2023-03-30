import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:3000/api/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    } catch (error) {
        dispatch(loginFailed());
    }
};

export const registerUser = async (user, dispatch) => {
    dispatch(registerStart());
    try {
        const res = await axios.post("http://localhost:3000/api/auth/register", user);
        dispatch(registerSuccess(res.data));
        //navigate("/login");
    } catch (error) {
        dispatch(registerFailed());
    }
};