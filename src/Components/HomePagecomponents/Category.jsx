import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assests/homecategory/img11.jpg";
import img2 from "../../assests/homecategory/img2.jpg";
import img3 from "../../assests/homecategory/img3.jpg";
import img4 from "../../assests/homecategory/img4.jpg";
import img5 from "../../assests/homecategory/img1.jpg";
import img6 from "../../assests/homecategory/img3.jpg";
import img7 from "../../assests/homecategory/img7.jpg";
import img8 from "../../assests/homecategory/img8.jpg";
import img9 from "../../assests/homecategory/img9.jpg";
import img10 from "../../assests/homecategory/img10.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
// import "./style.css"

// import required modules
import { Pagination , EffectCoverflow} from "swiper/modules";
import { Autoplay, Navigation } from "swiper/modules";

const Category = () => {
  return (
    <Box>
      <Heading mb={10}  fontSize={{ base: "small", sm: "small", md: "large", lg: "xx-large" }}>
      SHOP BY CATEGORY
      </Heading>
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
      breakpoints={{
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide>
        <div className="square-container">
          <img src={img1} alt="1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="square-container">
          <img src={img2} alt="2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="square-container">
          <img src={img3} alt="3" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="square-container">
          <img src={img4} alt="4" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="square-container">
          <img src={img5} alt="5" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="square-container">
          <img src={img6} alt="6" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="square-container">
          <img src={img7} alt="7" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="square-container">
          <img src={img8} alt="8" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="square-container">
          <img src={img9} alt="9" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="square-container">
          <img src={img10} alt="10" />
        </div>
      </SwiperSlide>
    </Swiper>
    </Box>
  );
}

export default Category;
