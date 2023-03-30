import React, { useState } from "react";
import "./style.css";
import { loginUser } from "../../../redux/apiRequest.jsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginHandle = (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            email: email,
            password: password,
        };
        loginUser(newUser, dispatch, navigate);
    };

    return (
        <>
            <div className="box-register">
                <h3>Đăng nhập</h3>
                <form className="register-form">
                    <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="text" placeholder="địa chỉ email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={loginHandle} className="mt-3">Đăng nhập</button>
                </form>
            </div>
        </>
    )
}

export default Login;