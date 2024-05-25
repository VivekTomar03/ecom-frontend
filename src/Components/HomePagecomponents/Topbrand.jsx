import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assests/sliderimages/img1.jpg";
import img2 from "../../assests/sliderimages/img2.jpg";
import img3 from "../../assests/sliderimages/img3.jpg";
import img4 from "../../assests/sliderimages/img4.jpg";
import img5 from "../../assests/sliderimages/img5.jpg";
import img6 from "../../assests/sliderimages/img6.jpg";
import img7 from "../../assests/sliderimages/img7.jpg";
import img8 from "../../assests/sliderimages/img8.jpg";
import img9 from "../../assests/sliderimages/img9.jpg";
import img10 from "../../assests/sliderimages/img10.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { Autoplay, Navigation } from "swiper/modules";

const Topbrand = () => {
  return (
    <Box>
      <Heading mb={10}  fontSize={{ base: "small", sm: "small", md: "large", lg: "xx-large" }}>
        MEDAL WORTHY BRANDS TO BAG
      </Heading>
      <Swiper
        slidesPerView={4}
        spaceBetween={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
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
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <img src={img1} alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img3} alt="1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img4} alt="1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img6} alt="1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img5} alt="1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img7} alt="1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img8} alt="1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img9} alt="1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img10} alt="1" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Topbrand;
