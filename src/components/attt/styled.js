import styled from "styled-components"

export const OverViewStyle = styled.div`
.bg-video {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.boxHeader{
  
  width: 100%;
    display: flex;
    justify-content: center;
}
.rotate-90-cw {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.rotate-90-cw.hovered {
  animation: rotate90 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes rotate90 {
  to {
    transform: rotate(360deg);
  }
}




.header {
  top:50px;
  margin-top: 10px;
  width: 700px;
  height: 50px;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
  display: flex;
      /* transform: skewX(20deg); */
  align-items: center;
  justify-content: center;
  border-top: 1px solid #f2f3f4; /* Đường viền màu xanh dương ở trên */
  border-bottom: 1px solid #f2f3f4; /* Đường viền màu xanh dương ở dưới */
  border-left: 1px solid #f2f3f4; /* Đường viền màu xanh dương bên trái */
  border-right: 1px solid #0788fc; /* Đường viền màu xanh dương bên phải */
}

.header-text {
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.img1,
.img1-2,
.img1-3,
.img1-6
{
  transition: transform 0.3s ease; /* Tạo hiệu ứng mượt mà */
}

.img1:hover,
.img1-2:hover,
.img1-3:hover,
.img1-6:hover
{
  transform: scale(1.3); /* Phóng to ảnh khi hover */
  cursor: pointer;
}
.text {
  transition: font-size 0.3s ease;
}

/* .text:hover {
  font-size: 24px; 
} */
.bg-image {
  background-image: url('../../src/assets/Artboard.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom; /* Điều chỉnh vị trí của ảnh nền */
}
.carBox1{
  padding-right: 135px!important;
}
.carBox2{
 padding-left: 90px !important;
}
.carBox3{
  padding-right: 150px !important;
}
.carBox4{
  padding-left: 50px !important;
}
.carBox5{
  padding-right: 175px !important;
}
.carBox6{
  padding-left: 40px !important;
}
.carBox7{
  padding-right: 150px !important;
}
.carBox8{
  padding-left: 80px !important;
}
  .bgl{
/* background: linear-gradient(90deg, rgba(3,14,96,1) 0%, rgba(4,135,175,1) 75%); */
/* position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to left, rgba(7, 136, 252, 1) 0%, rgba(7, 136, 252, 0) 100%); */
    position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to left, rgb(0 241 241 / 70%) 0%, rgba(7, 136, 252, 0) 100%);

  }
  
  
 .bgc {
    background: linear-gradient(to right, rgb(0 241 241 / 70%) 0%, rgba(7, 136, 252, 0) 100%);
}
  
.card-child{
    width: 120px;
    height: 80px;
    justify-content: center;
    display: flex;
    align-items: center;
    color: white;
        font-weight: 600;
    font-size: 24px;
    /* font-weight: 600;
    font-size: 16px; */
}
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .boxImg{
      position: relative;
      padding-left: 10px;
  }
  .img1{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    width: 50px;
    height: 50px;
    margin: 0px 0px 32px 25px;
        object-fit: cover;
  }
  .img1-2{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    width: 100%;
    height: auto;
    margin: 20px 0px 0px 0px;
        object-fit: cover;
  }
  .img1-3{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    width: 50px;
    height: auto; 
      margin: 12px 0px 32px 25px;
        object-fit: cover;
  }
  .img1-6{
        position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    width: 45px;
    height: 52px;
    margin: -5px 0px 0px 27px;
    object-fit: cover;
  }
  .img2{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    top: -10px;
    width: 100px;
    height: auto;
    padding-top: 35px;
        object-fit: cover;
    
  }

 .overlay {
    color: white;
    font-size: 30px;
    font-weight: 600;
    position: absolute;
    width: 440px;
    height: 440px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    /* background-image:url('src/assets/Asset6.png'); */
    background: radial-gradient(circle, rgb(0 117 223) 0%, rgb(0 12 107) 100%);
    /* background-image: radial-gradient(circle, rgba(4,65,120,1) 0%, rgba(2,12,88,1) 100%), url('src/assets/Asset6.png'); */
  background-size: cover;
  background-repeat: no-repeat;
  }
 .overlay::before {
  content: "";
  position: absolute;
  top: -100px ;
     left: -100px;
    right: 0px;
    width: 142%;
    height: 146%;
  background-image: url('../../src/assets/Asset6.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 10;
}


  .card {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    /* border-radius: 50%; */
    overflow: hidden; /* Dùng để che nội dung vượt ra ngoài hình tròn */
  }
@keyframes sparkle {
  0% {
    opacity: 0;
    transform: translateY(1000%);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-1000%);
  }
}

.sparkle-container {
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Đảm bảo không ảnh hưởng đến tương tác */
}

.sparkles {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  animation: sparkle 4s infinite;
}

/* Điều chỉnh vị trí của từng đốm sáng */
.sparkles:nth-child(1) {
  bottom: 0;
  left: 5%;
  transform: translateX(-50%);
  animation-delay: 0.5s;
}
.sparkles:nth-child(2) {
  bottom: 0;
  left: 10%;
  transform: translateX(-50%);
  animation-delay: 0.6s;
}
.sparkles:nth-child(3) {
  bottom: 0;
  left: 15%;
  transform: translateX(-50%);
  animation-delay: 0.7s;
}

.sparkles {
  position: fixed;
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  animation: sparkle 4s infinite;
}
.sparkles {
  /* ... */
  bottom: 0;
  left: 50%; /* Hoặc điều chỉnh theo vị trí mong muốn */
  transform: translateX(-50%);
}
.sparkles:nth-child(2) {
  /* ... */
  bottom: 0;
  left: 20%; /* Hoặc điều chỉnh theo vị trí mong muốn */
  transform: translateX(-20%);
}
.sparkles:nth-child(3) {
  /* ... */
  bottom: 0;
  left: 35%; /* Hoặc điều chỉnh theo vị trí mong muốn */
  transform: translateX(-35%);
}
.texConten{
      color: white;
    position: relative;
    z-index: 11;
}




  
`


