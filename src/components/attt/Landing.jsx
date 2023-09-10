
import { OverViewStyle } from "./styled";
import { Col, Row } from "antd";
import { useState } from "react";

const Landing = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleAnimationEnd = () => {
    setIsHovered(false);
  };

  return (
    <>
      <header>
        <div></div>
      </header>
      <body >
        <OverViewStyle>
          <div className=" bg-video sparkle">
            <video autoPlay loop muted className="video-background">
              <source src="../../src/assets/videoBg.mp4" type="video/mp4" />
            </video>
            <div className="boxHeader">
              {/* <div class=""> */}
              <div class="header header-text">NỀN TẢNG SỐ TRUNG TÂM VNCERT/CC</div>
              {/* </div> */}
            </div>
            <div className="flex justify-center ">
              <div class="container">

                <div class="card">
                  <Row gutter={[64, 10]}>
                    <Col className=" z-0 relative card-child carBox1 bgl" span={12}>
                      <div class="z-1 relative ml-[20px] cursor-pointer"><a href="https://vn-cop.vn/" target="_blank" rel="noopener noreferrer">BẢO VỆ TRẺ EM</a></div>
                      <div className="boxImg">
                        <a href="https://vn-cop.vn/" target="_blank" rel="noopener noreferrer"><img
                          src="../../src/assets/Img1.png"
                          alt="#"
                          className=" img1 object-cover "

                        /></a>

                        <img
                          src="../../src/assets/Asset.png"
                          alt="#"
                          className=" img2 object-cover"
                        />
                      </div>

                    </Col>
                    <Col className=" z-0 relative card-child carBox2 bgc" span={12}>
                      <div className="boxImg">
                        <a href="https://vncert.vn/" target="_blank" rel="noopener noreferrer">
                          <img
                            src="../../src/assets/Img2.png"
                            alt="#"
                            className="img1-2 pr-[10px]"
                          />
                        </a>

                        <img
                          src="../../src/assets/Asset.png"
                          alt="#"
                          className=" img2"
                        />
                      </div>
                      <div class="z-1 relative float-right mr-[20px] pl-[10px] cursor-pointer"><a href="https://vncert.vn/" target="_blank" rel="noopener noreferrer">Dashboard</a></div>

                    </Col>
                    <Col className=" z-0 relative card-child carBox3 bgl" span={12}>
                      <div class="z-1 relative cursor-pointer"><a href=" https://mail.vncert.vn" target="_blank" rel="noopener noreferrer">THƯ ĐIỆN TỬ</a></div>
                      <div className="boxImg">
                        <a href="https://mail.vncert.vn/" target="_blank" rel="noopener noreferrer">
                          <img
                            src="../../src/assets/Img3.png"
                            alt="#"
                            className=" img1-3 "
                          />
                        </a>
                        <img
                          src="../../src/assets/Asset.png"
                          alt="#"
                          className=" img2"
                        />
                      </div>

                    </Col>
                    <Col className=" z-0 relative card-child carBox4 bgc" span={12}>
                      <div className="boxImg">
                        <a href=" https://irlab.vn/#!/login?r=%2F" target="_blank" rel="noopener noreferrer">
                          <img
                            src="https://irlab.vn/images/fav-ir.png"
                            alt="#"
                            className=" img1 "
                          />
                        </a>

                        <img
                          src="../../src/assets/Asset.png"
                          alt="#"
                          className=" img2"
                        />
                      </div>
                      <div class="z-1 relative float-right cursor-pointer"><a href=" https://irlab.vn/#!/login?r=%2F" target="_blank" rel="noopener noreferrer">IRLAB</a></div>
                    </Col>
                    <Col className=" z-0 relative card-child carBox5 bgl" span={12}>
                      <div class="z-1 relative cursor-pointer"><a href=" http://tendinhdanh.ais.gov.vn" target="_blank" rel="noopener noreferrer">TÊN ĐỊNH DANH</a></div>
                      <div className="boxImg">
                        <a href=" http://tendinhdanh.ais.gov.vn" target="_blank" rel="noopener noreferrer">
                          <img
                            src="../../src/assets/Img5.png"
                            alt="#"
                            className=" img1 "
                          />
                        </a>
                        <img
                          src="../../src/assets/Asset.png"
                          alt="#"
                          className=" img2"
                        />
                      </div>
                    </Col>
                    <Col className=" z-0 relative card-child carBox6 bgc" span={12}>
                      <div className="boxImg">
                        <a href=" https://df.irlab.vn" target="_blank" rel="noopener noreferrer">
                          <img
                            src="../../src/assets/Img6.png"
                            alt="#"
                            className=" img1-6 "
                          />
                        </a>
                        <img
                          src="../../src/assets/Asset.png"
                          alt="#"
                          className=" img2"
                        />
                      </div>

                      <div class="z-1 relative float-right cursor-pointer"><a href="https://df.irlab.vn" target="_blank" rel="noopener noreferrer">DFLAB</a></div>
                    </Col>
                    <Col className=" z-0 relative card-child carBox7 bgl" span={12}>
                      <div class="z-1 relative cursor-pointer"><a href="https://pitch-plastics-negotiation-secret.trycloudflare.com/" target="_blank" rel="noopener noreferrer">QUẢN LÝ TÀI NGUYÊN </a></div>
                      <div className="boxImg">

                        <a href="https://pitch-plastics-negotiation-secret.trycloudflare.com/" target="_blank" rel="noopener noreferrer">
                          <img
                            src="../../src/assets/Img7.png"
                            alt="#"
                            className=" img1 "
                          />
                        </a>
                        <img
                          src="../../src/assets/Asset.png"
                          alt="#"
                          className=" img2"
                        />
                      </div>
                    </Col>
                    <Col className=" z-0 relative card-child carBox8 bgc" span={12}>
                      <div className="boxImg">
                        <a href="https://chongthurac.vn" target="_blank" rel="noopener noreferrer">
                          <img
                            src="../../src/assets/Img8.png"
                            alt="#"
                            className=" img1 "
                          />
                        </a>
                        <img
                          src="../../src/assets/Asset.png"
                          alt="#"
                          className=" img2"
                        />
                      </div>
                      <div class="z-1 relative float-right cursor-pointer"><a href="https://chongthurac.vn" target="_blank" rel="noopener noreferrer">CHỐNG THƯ RÁC</a></div>
                    </Col>

                  </Row>
                </div>
                <div class="overlay cursor-pointer "><div class="z-1 relative float-right cursor-pointer "><a href="https://192.168.3.81" target="_blank" rel="noopener noreferrer" className="texConten"></a></div></div>
              </div>

            </div>
          </div>

        </OverViewStyle>


      </body >
    </>
  );
}

export default Landing;
