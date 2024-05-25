import React from "react";
import {  Flex, } from "@chakra-ui/react";
import Slider1 from "../Components/Slider";
import Topbrand from "../Components/HomePagecomponents/Topbrand";
import Globalbrand from "../Components/HomePagecomponents/Globalbrand";
import Category from "../Components/HomePagecomponents/Category";
import Category2 from "../Components/HomePagecomponents/Category2";
const Homepage = () => {
  return (
    <Flex  pl={10} pr={10} flexDir={"column"} gap={20}>
      {/* <Flex 
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
      <Image 
        src={imageapp}
        width={{ base: "100%", md: "50%" }} 
        height="auto"
        objectFit="cover"
      />
    </Flex> */}
      <Slider1 />
      <Topbrand />
      <Globalbrand/>
      <Category/>
      <Category2/>
    </Flex>
  );
};

export default Homepage;
