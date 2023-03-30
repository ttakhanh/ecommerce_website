import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { registerUser } from "../../redux/apiRequest.jsx";
import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const dispatch = useDispatch();
    // const navigate = async (req, res) => {
    //     try {
    //         navigate("/login");
    //     } catch (error) {
    //         res.status(404).json({ error: error })
    //     }
    // }
    const registerHandle = (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            email: email,
            password: password,
            phone: phone,
            address: address,
        };
        registerUser(newUser, dispatch);
        navigate("/login");
    }

    return (
        <>
            <div className="box-register">
                <h3>Đăng ký</h3>
                <form className="register-form">
                    <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="text" placeholder="địa chỉ email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <input type="text" placeholder="địa chỉ" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <input type="password" placeholder="mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={registerHandle} className="mt-3">Đăng ký</button>
                    <p class="message">Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
                </form>
            </div>
        </>
    )
}

export default Register;