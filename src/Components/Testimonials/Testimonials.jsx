import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet, consectetur adi lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectet",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet, consectetur adi lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectet",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adi lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectet",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adi lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectet",
    },
  ];

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clents always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur t-blur2"
          style={{ background: "var(--skyblue)" }}
        ></div>
      </div>

      {/*slider*/}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((clients, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={clients.img} alt="" />
                <span>{clients.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Testimonials;
