import React from 'react';
import '../../asset/bootstrap/css/bootstrap.min.css';
import '../../asset/fonts/ionicons.min.css';
import '../../asset/css/Features-Small-Icons-icons.css';
import '../../asset/css/Login-Form-blue-Gradient-Blue-gradient-login-form.css';
import '../../asset/css/Login-Form-blue-Gradient.css';
import { useNavigate } from 'react-router-dom';
import ROUTER from '../../router';

function FA() {
    const navigate = useNavigate()

  // CALL API
    //   const FA = async () => {
    //     try {
    //         //   setLoading(true)
    //         const res = await AuthService.login({ // gửi userId và password  lên server
               
    //           //body Api
    //         })
    //       console.log(res?.data?.isOk)
    //       //Dữ liệu thành công lữu dữ liệu và chuyển hướng
    //         if (res?.data?.isOk) {
    //             setStorage(STORAGE.TOKEN, res?.data?.Object?.Token)
    //             setStorage(STORAGE.USER_INFO, res?.data?.Object)
    //             navigate(ROUTER.FA)

    //         } else (
    //           //Lấy thông báo ERROR
    //             // setNotification(res?.data?.Object)
    //         )
    //     } finally {

    //         // setLoading(false)
    //     }
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(ROUTER.ROOT1)
        // gửi userId và password  lên server
    };

  return (
    <section>
      <div className="lgp-hd">
        <h2><strong>Nền tảng điều phối xử lý sự cố an toàn thông tin mạng Quốc gia</strong></h2>
        <h5><strong>login to view Dashboard</strong></h5>
      </div>
      <div className="container login-cont">
        <div className="row">
          <div className="col-10 col-sm-6 col-md-4 col-lg-4 offset-1 offset-sm-3 offset-md-4 offset-lg-4 login-col">
            <i className="icon ion-lock-combination"></i>
            <form className="login-form" method="post">
              <div className="form-group mb-3">
                <input className="form-control form-control-lg lg-frc" type="text" required="" placeholder="2FA " />
              </div>
              <div className="form-group mb-3">
                <button className="btn btn-light btn-lg login-btn" type="submit" onClick={handleSubmit}><strong>2FA Login</strong></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FA;
