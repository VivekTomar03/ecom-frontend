import React from 'react';
import { Box, Button, Card, Flex, Heading, Image, Text } from "@chakra-ui/react";
import img1 from "../../assests/iloveimg-converted/app.jpg"
import img2 from "../../assests/iloveimg-converted/app1.jpg"
import img3 from "../../assests/iloveimg-converted/app3.jpg"
import img4 from "../../assests/iloveimg-converted/app4.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
const Downloadapp = () => {
  return (
    <Flex
    direction={{ base: "column", md: "row" }} 
    gap={{ base: 4, md: 10 }} 
    align="center" 
    p={{ base: 4, md: 8 }}
  >
    <Flex 
      flexDir={"column"} 
      gap={2} 
      alignItems={{ base: "center", md: "flex-start" }} 
      textAlign={{ base: "center", md: "left" }}
    >
      <Heading 
        fontSize={{ base: "small", sm: "small", md: "large", lg: "xxx-large" }}
      >
        Lowest Prices Best Quality Shopping
      </Heading>
      <Flex 
        rounded={10} 
        gap={2} 
        alignItems={"center"} 
        justifyContent={"center"} 
        color={"white"} 
        bgColor={"#FF3E6C"} 
        p={{base:2,sm:2, md:4 , lg:4}} 
        zIndex={0}
      >
        <Image src="https://images.meesho.com/images/pow/playstoreSmallIcon.png" />
        <Text fontSize={"medium"}>Download Mobile App</Text>
      </Flex>
    </Flex>
    <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img width={"50px"} height={"50px"} src={img1} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
          <img  width={"50px"} height={"50px"} src={img2} alt='2' />
        </SwiperSlide>
        <SwiperSlide>
          <img  width={"50px"} height={"50px"} src={img3}  alt='4'/>
        </SwiperSlide>
        <SwiperSlide>
          <img  width={"50px"} height={"50px"} src={img4}  alt='3'/>
        </SwiperSlide>
      </Swiper>
  </Flex>
  );
}

export default Downloadapp;
