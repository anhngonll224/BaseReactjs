import React, { useState } from 'react';
import '../../asset/bootstrap/css/bootstrap.min.css';
import "../../asset/fonts/ionicons.min.css"
import "../../asset/css/Features-Small-Icons-icons.css"
import "../../asset/css/Login-Form-blue-Gradient-Blue-gradient-login-form.css"
import "../../asset/css/Login-Form-blue-Gradient.css"
import AuthService from '../../services/AuthService';
import STORAGE, { setStorage } from '../../lib/storage';
import { useNavigate } from 'react-router-dom';
import ROUTER from '../../router';

const Login = () => {
    const navigate = useNavigate()
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [userIdError, setUserIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [notification, setNotification] = useState('');
    const [timeOut, setTimeOut] = useState(2000);

    //Lấy dữ liệu từ input
    const handleUserIdChange = (e) => {
        const value = e.target.value;
        setUserId(value);

        if (!value) {
            setUserIdError('Nhập tên tài khoản');
        } else {
            setUserIdError('');
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (!value) {
            setPasswordError('Nhập mật khẩu');
        } else {
            setPasswordError('');
        }
    };

    const onLogin = async () => {
        try {
            //   setLoading(true)
            const res = await AuthService.login({ // gửi userId và password  lên server
                Username: userId,
                Password: password
            })
            console.log(res?.data?.isOk)
            if (res?.data?.isOk) {
                setStorage(STORAGE.TOKEN, res?.data?.Object?.Token)
                setStorage(STORAGE.USER_INFO, res?.data?.Object)
                navigate(ROUTER.FA)

            } else (
                setNotification(res?.data?.Object)
            )
        } finally {
            // setLoading(false)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTimeout(() => {
            setTimeOut(2000);
        }, timeOut);

        if (!notification) {
        } else {
            setNotification('');
        }
        onLogin()
        // gửi userId và password  lên server
    };

    return (
        <div>
            <section>
                <div className="lgp-hd">
                    <h2><strong>Nền tảng điều phối xử lý sự cố an toàn thông tin mạng quốc gia</strong></h2>
                    <h5><strong>login to view Dashboard</strong></h5>
                </div>
                <div className="container login-cont">
                    <div className="row">
                        <div className="col-10 col-sm-6 col-md-4 col-lg-4 offset-1 offset-sm-3 offset-md-4 offset-lg-4 login-col">
                            <i className="icon ion-lock-combination"></i>
                            <form className="login-form" method="post">
                                <div className="form-group mb-3">
                                    <input
                                        className="form-control form-control-lg lg-frc"
                                        type="text"
                                        required
                                        placeholder="Enter User ID"
                                        value={userId}
                                        onChange={handleUserIdChange}
                                        pattern="^[a-zA-Z0-9]+$"
                                        title="User ID can only contain letters and numbers."
                                    />
                                    <span className="error text-danger">{userIdError}</span>


                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        className="form-control form-control-lg lg-frc"
                                        type="password"
                                        required
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$"
                                        title="Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long."
                                    />
                                    <span className="error text-danger">{passwordError}</span>

                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="formCheck-1" defaultChecked />
                                    <label className="form-check-label text-white" htmlFor="formCheck-1">Khởi động cùng windowns</label></div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="formCheck-2" />
                                    <label className="form-check-label text-white" htmlFor="formCheck-2">Mở cửa sổ trương trình khi khởi động</label></div>
                                <div className="form-group mb-3">
                                    <button className="btn btn-light btn-lg login-btn" type="submit" onClick={handleSubmit}>
                                        <strong>Login</strong>
                                    </button>
                                </div>
                                <span className="error text-danger">{notification}</span>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Login;
