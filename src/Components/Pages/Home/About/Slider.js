import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import banner1 from "../../../../assets/img/b-1.jpg"
import banner2 from "../../../../assets/img/b-2.jpg"
import banner3 from "../../../../assets/img/b-3.jpg"
const Slider = () => {
    return (
        <div className="p-10">
        <Swiper
   slidesPerView={3}
   spaceBetween={30}
   pagination={{
     clickable: true,
   }}
   modules={[Pagination]}
   className="mySwiper"
 >
   <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
   <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
   <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
   <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
   <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
   <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
   <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
   <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
   <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
  
 </Swiper>
   
  </div>
    );
};

export default Slider;