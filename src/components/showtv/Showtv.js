import React, { useEffect, useState } from 'react';
import '../../asset/bootstrap/css/bootstrap.min.css';
import '../../asset/fonts/ionicons.min.css';
import '../../asset/css/Features-Small-Icons-icons.css';
import '../../asset/css/Login-Form-blue-Gradient-Blue-gradient-login-form.css';
import '../../asset/css/Login-Form-blue-Gradient.css';


const Showtv = () => {

    // const [dataFromScript, setDataFromScript] = useState(null);
    // useEffect(() => {
    //     const bootstrapScript = document.createElement('script');
    //     bootstrapScript.src = 'asset/bootstrap/js/bootstrap.min.js';
    //     bootstrapScript.async = true;
    //     document.body.appendChild(bootstrapScript);

    //     const bsInitScript = document.createElement('script');
    //     bsInitScript.src = 'asset/js/bs-init.js';
    //     bsInitScript.async = true;
    //     document.body.appendChild(bsInitScript);

    //     // Simulate script data
    //     const scriptData = "Data from script";
    //     setDataFromScript(scriptData);

    //     return () => {
    //         document.body.removeChild(bootstrapScript);
    //         document.body.removeChild(bsInitScript);
    //     };
    // }, []);

    // CALL API
    //   const Showtv = async () => {
    //     try {
    //         //   setLoading(true)
    //         const res = await AuthService.login({ /
    //           //body Api
    //         })
    //       console.log(res?.data?.isOk)
    //         if (res?.data?.isOk) {
    //         } else (
    //             // setNotification(res?.data?.Object)
    //         )
    //     } finally {

    //         // setLoading(false)
    //     }
    // }

    return (
        <div>

            <div className="lgp-hd">
                <h2><strong>Nền tảng điều phối xử lý sự cố an toàn thông tin&nbsp;mạng&nbsp;Quốc gia</strong></h2>
                <hr />
                <h5 className="text-capitalize text-center"><strong>Tổng số tổ chức: 1008 | Tổng số tải khoản: 3000 | Tổ chức đang online:&nbsp; 300 | Thành Viên đang online: 2000&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong></h5>
                <h5 className="text-capitalize text-center"><strong>cảnh báo: Đỏ (sự cố lỗ hổng RCE, văn bản cảnh báo nguy hiểm)</strong><br /><strong>Vàng, sự cố trung bình, văn bản mời họp, hội thảo</strong><br /><strong>Trắng chia sẻ tin tức, write-up ...&nbsp; &nbsp;</strong><br /><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong></h5>
                <hr />
            </div>
            <div className="container py-4 py-xl-5">
                <div className="row mb-5 tv">
                    <div className="col top-5">
                        <h2 className="text-center text-white">Top 5 Tổ chức online thường xuyên&nbsp; &nbsp;&nbsp;</h2>
                        <p className="text-start text-white w-lg-50">1, Sở thông tin truyền thông tỉnh<br />2, Công ty ....<br />3, Viện nghiên cứu<br />4, Bảo hiểm xã hội VN<br />5, Bộ thông tin và truyền thông</p>
                    </div>
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <h2 className="text-white">Top tổ chức chia sẻ tích cực nguy cơ ATTT</h2>
                        <p className="text-start text-white w-lg-50">1, Sở thông tin truyền thông tỉnh<br />2, Công ty ....<br />3, Viện nghiên cứu<br />4, Bảo hiểm xã hội VN<br />5, Bộ thông tin và truyền thông</p>
                    </div>
                </div>
                <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 tv">
                    <div className="col soluong">
                        <div className="d-flex">
                            <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bell">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                                </svg>
                            </div>
                            <div className="px-3">
                                <h4 className="text-warning">Các tổ chức đang không có hoạt động</h4>
                                <p className="text-white">1, tổ chức a Không hoạt động 1 tháng<br />2, Tổ chức b khong hoạt động 1 tháng<br />3, tổ chức c&nbsp;khong hoạt động 1 tháng<br />4, tổ chức D&nbsp; khong hoạt động 1 tháng<br />5, tổ chức E&nbsp;khong hoạt động 1 tháng<br /><br />Trong vòng 6 tháng nếu không có bất cứ hoạt động, chúng tôi sẽ xoa bỏ tư cách thành viên tự nguyện.<br /><br /></p>
                                <a href="#">
                                    Xem toàn bộ
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-right">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col soluong">
                        <div className="d-flex">
                            <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bezier">
                                    <path fillRule="evenodd" d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"></path>
                                    <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
                                </svg>
                            </div>
                            <div className="px-3">
                                <h4 className="text-white">Số lượng sự cố đã cảnh báo</h4>
                                <p className="text-white">
                                    Ngày xx/xx/xxxx<br />
                                    - Tìn tức chia sẻ 0x, đã xem xx tổ chức<br />
                                    - Văn bản cảnh báo diện rộng 0x, đã xem xx tổ chức<br />
                                    - Cảnh báo, điều phối 0x sự cố tới 0x Tổ chức<br />
                                    - Số đơn vị đã nắm thông tin báo cáo 2/5<br /><br />
                                </p>
                                <p className="text-white"></p>
                                <p className="text-white"><br />
                                    Tháng xx/xxxx<br />
                                    - Tìn tức chia sẻ 0x đã xem xx tổ chức<br />
                                    - Văn bản cảnh báo diện rộng 0x. đã xem xx tổ chức<br />
                                    Cảnh báo, điều phối 0x sự cố tới 0x Tổ chức<br />
                                    - Số đơn vị báo cáo sự cố 6 tháng đầu năm: 197/226<br /><br />
                                </p>
                                <a href="#">
                                    Chi tiết
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-right">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col tondong">
                        <div className="d-flex">
                            <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-flag">
                                    <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"></path>
                                </svg>
                            </div>
                            <div className="px-3">
                                <h4 className="text-danger">Đơn vị tồn đọng nhiều sự cố nhất</h4>
                                <p className="text-white">
                                    1, tổ chức a với x sự cố<br />
                                    2, Tổ chức b với x sự cố<br />
                                    3, tổ chức c với x sự cố<br />
                                    4, tổ chức D&nbsp;với x sự cố<br />
                                    5, tổ chức E với x sự cố<br /><br />
                                    Yêu cầu các Đơn vị nghiêm túc phản ứng với sự cố. Mọi chi tiết trợ giúp có thể liên hệ qua phòng ĐPUC số dt 09xxxxx
                                </p>
                                <a href="#">
                                    Chi tiết
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-right">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="text-white bg-dark"></footer>
            </div>

        </div>

    );
}

export default Showtv;
