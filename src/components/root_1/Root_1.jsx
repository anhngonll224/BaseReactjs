import React from 'react';
import '../../asset/bootstrap/css/bootstrap.min.css';
import '../../asset/fonts/ionicons.min.css';
import '../../asset/css/Features-Small-Icons-icons.css';
import '../../asset/css/Login-Form-blue-Gradient-Blue-gradient-login-form.css';
import '../../asset/css/Login-Form-blue-Gradient.css';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2'; // Add this import statement

const Root1 = () => {
      const data = {
        labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
        datasets: [
            {
                label: 'Data',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                },
                title: {
                    display: true,
                    // text: 'Items',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value',
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Top ISP',
                fontSize: 18,
            },
        },
    };
    return (
         <div>
            <div>
                <section>
                    <div className="lgp-hd">
                        <h2><strong>Nền tảng điều phối xử lý sự cố an toàn thông tin mạng Quốc gia</strong></h2>
                        <hr />
                        <h5 className="text-capitalize text-center">
                            <strong>Tổng số tổ chức: 1008 | Tổng số tải khoản: 3000 | Tổ chức đang online: 300 | Thành Viên đang online: 2000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                        </h5>
                        <hr />
                        <h5 className="text-capitalize text-center">
                            <strong>cảnh báo: Đỏ (sự lỗ hổng RCE, văn bản cảnh báo nguy hiểm)</strong><br />
                            <strong>Vàng, sự cố trung bình, văn bản mời họp, hội thảo</strong><br />
                            <strong>Trắng chia sẻ tin tức, write-up ...&nbsp;&nbsp;</strong><br />
                            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                        </h5>
                        <hr />
                    </div>
                </section>
                <div className="container root-1">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="four columns card card-padding card-blue">
                                <p className="text-white">Top các tổ chức hoạt động tích cực</p>
                                <ul className="text-white">
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                    <li>Item 4</li>
                                    <li>Item 5</li>
                                    <li>Item 5</li>
                                    <li>Item 5</li>
                                </ul>
                            </div>
                            <div className="four columns card card-padding card-red">
                                <p className="text-white">Top ISP nằm trong Blacklist <br />(Ngày xx/xx/xx)</p>
                                <div>
                                    <div>
                                        <Bar data={data} options={options} />
                                    </div>
                                    {/* <canvas
                                        data-bss-chart='{"type":"bar","data":{"labels":["January","February","March","April","May","June"],"datasets":[{"label":"Revenue","backgroundColor":"#4e73df","borderColor":"#4e73df","data":["4500","5300","6250","7800","9800","15000"]}]},"options":{"maintainAspectRatio":true,"legend":{"display":false,"labels":{"fontStyle":"normal"}},"title":{"fontStyle":"bold"},"scales":{"xAxes":[{"ticks":{"fontStyle":"normal"}}],"yAxes":[{"ticks":{"fontStyle":"normal"}}]}}}'
                                    ></canvas> */}
                                </div>
                            </div>
                            <div className="four columns card card-padding card-orange">
                                <p className="text-white">Cảnh báo tới IP đơn vị đăng ký</p>
                                <ul className="text-white">
                                    <li>10 ip botnet</li>
                                    <li>20 ip&nbsp;brute force</li>
                                    <li>30 ip ....</li>
                                    <li>Item 4</li>
                                    <li>Item 4</li>
                                    <li>Item 4</li>
                                    <li>Item 4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="four columns">
                                <div className="card card-padding card-green">
                                    <p className="text-white">Tin tức ATTT và Truyền thông</p>
                                    <a href="#">Link</a>
                                    <a href="#">Link</a>
                                    <a href="#">Link</a>
                                    <a href="#">Link</a>
                                    <a href="#">Link</a>
                                </div>
                                <div className="card card-padding card-green">
                                    <p className="text-white">Sổ tay Ứng cứu sự cố</p>
                                    <a href="#">Link</a>
                                    <a href="#">Link</a>
                                    <a href="#">Link</a>
                                    <a href="#">Link</a>
                                    <a href="#">Link</a>
                                </div>
                                <div className="card card-padding card-green">
                                    <p className="text-white">Tình huống giả định ATTT<br /><br /></p>
                                    <ul className="text-white">
                                        <li>Tình huống 1</li>
                                        <li>Tình huống 2</li>
                                        <li>Tình huống 3</li>
                                        <li>Tình huống 4</li>
                                        <li>Tình huống 5</li>
                                        <li>Tình huống 6</li>
                                    </ul>
                                </div>
                                <div className="card card-padding card-green">
                                    <p className="text-start text-white">
                                        Cơ quan chủ quản: <strong>Cục An toàn thông tin - </strong>Trung tâm Ứng cứu khẩn cấp không gian mạng Việt Nam
                                        <br />Giấy phép số: 303/GP-BC do Cục Báo chí - Bộ Văn hoá Thông tin cấp ngày 4/10/2006
                                        <br />Chịu trách nhiệm chính - Quyền Giám đốc Trung tâm VNCERT/CC: Ông Nguyễn Đức Tuân
                                    </p>
                                </div>
                            </div>
                            <div className="text-danger eight columns card card-padding">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="text-danger">Top 5 đơn vị có kết nối tới C&amp;C&nbsp; &nbsp;&nbsp;</th>
                                                <th className="text-danger">Đơn vị tồn đọng nhiều sự cố nhất</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>C<ul class="text-danger">
                                                    <li>Item 1</li>
                                                    <li>Item 2</li>
                                                    <li>Item 3</li>
                                                    <li>Item 4</li>
                                                </ul>ell 1</td>
                                                <td>C<ul class="text-danger">
                                                    <li>Đơn vị A với 5 sự cố ...</li>
                                                    <li>Item 2</li>
                                                    <li>Item 3</li>
                                                    <li>Item 4</li>
                                                </ul>ell 2</td>
                                            </tr>
                                            <tr></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="text-danger eight columns card card-padding">
                                <p className="text-uppercase fs-5 text-danger">Các sự cố chưa xử lý</p>
                                <hr />
                                <div>
                                    <p>1, [Nghiêm trọng] [Đơn vị ABC] Sự cố lộ lọt tài khoản&nbsp;</p>
                                    <p className="text-end bordersuco">Ngày gửi: xxhxxp xx/xx/xx | Tổng thời gian: xxxx | Đã xem hoặc chưa xem | chưa xử lý&nbsp; &nbsp;</p>
                                </div>
                                <div>
                                    <p>2, [Nghiêm trọng] [Đơn vị ABC] Sự cố hệ thống bị chiếm quyền điều khiển</p>
                                    <p className="text-end bordersuco">Ngày gửi: xxhxxp xx/xx/xx | Tổng thời gian: xxxx | Đã xem hoặc chưa xem | chưa xử lý&nbsp; &nbsp;</p>
                                </div>
                                <div>
                                    <p>3, [Nghiêm trọng] [Đơn vị ABC] Sự cố hệ thống bị chiếm quyền điều khiển</p>
                                    <p className="text-end bordersuco">Ngày gửi: xxhxxp xx/xx/xx | Tổng thời gian: xxxx | Đã xem hoặc chưa xem | chưa xử lý&nbsp; &nbsp;</p>
                                    <p className="text-center text-white">1,2,3,... xx</p>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="text-danger eight columns card card-padding">
                                <p className="text-success">Các sự cố đã xử lý</p>
                                <div>
                                    <p className="text-success">1, [Nghiêm trọng] [Đơn vị ABC] Sự cố hệ thống bị chiếm quyền điều
                                        khiển</p>
                                    <p className="text-end text-success bordersuco">Ngày gửi: xxhxxp xx/xx/xx | Tổng thời gian: xxxx
                                        | Đã xem hoặc chưa xem | chưa xử lý&nbsp; &nbsp;</p>
                                </div>
                                <div>
                                    <p className="text-success">2, [Nghiêm trọng] [Đơn vị ABC] Sự cố hệ thống bị chiếm quyền điều
                                        khiển</p>
                                    <p className="text-end text-success bordersuco">Ngày gửi: xxhxxp xx/xx/xx | Tổng thời gian: xxxx
                                        | Đã xem hoặc chưa xem | chưa xử lý&nbsp; &nbsp;</p>
                                </div>
                                <div>
                                    <p className="text-success">3, [Nghiêm trọng] [Đơn vị ABC] Sự cố hệ thống bị chiếm quyền điều
                                        khiển</p>
                                    <p className="text-end text-success bordersuco">Ngày gửi: xxhxxp xx/xx/xx | Tổng thời gian: xxxx
                                        | Đã xem hoặc chưa xem | chưa xử lý&nbsp; &nbsp;</p>
                                </div>
                                <div>
                                    <p className="text-success">4, [Nghiêm trọng] [Đơn vị ABC] Sự cố hệ thống bị chiếm quyền điều
                                        khiển</p>
                                    <p className="text-end text-success bordersuco">Ngày gửi: xxhxxp xx/xx/xx | Tổng thời gian: xxxx
                                        | Đã xem hoặc chưa xem | chưa xử lý&nbsp; &nbsp;</p>
                                </div>
                                <div>
                                    <p className="text-success">5, [Nghiêm trọng] [Đơn vị ABC] Sự cố hệ thống bị chiếm quyền điều
                                        khiển</p>
                                    <p className="text-end text-success bordersuco">Ngày gửi: xxhxxp xx/xx/xx | Tổng thời gian: xxxx
                                        | Đã xem hoặc chưa xem | chưa xử lý&nbsp; &nbsp;</p>
                                    <p className="text-center text-white">1,2,3 .... xx</p>
                                </div>
                            </div>


                            {/* ... Other card components */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Root1;
