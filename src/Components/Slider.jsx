import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image1 from "../assests/iloveimg-converted/img2.jpg";
import image2 from "../assests/iloveimg-converted/img3.jpg";
import image3 from "../assests/iloveimg-converted/img4.jpg";
import image4 from "../assests/iloveimg-converted/off2.jpg";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Image } from "@chakra-ui/react";

export default function Slider1() {
  return (
    <Box mt={"10rem"}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="2" src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="3" src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="4" src={image4} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
