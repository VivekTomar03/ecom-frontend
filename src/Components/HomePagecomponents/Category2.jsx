import React from 'react';
import {  Flex, Heading, Image, SimpleGrid, } from "@chakra-ui/react";
import img1 from "../../assests/cetoryimges/img1.jpg"
import img2 from "../../assests/cetoryimges/img2.jpg"
import img3 from "../../assests/cetoryimges/img3.jpg"
import img4 from "../../assests/cetoryimges/img4.jpg"
import img5 from "../../assests/cetoryimges/img5.jpg"
import img6 from "../../assests/cetoryimges/img6.jpg"
import img7 from "../../assests/cetoryimges/img7.jpg"
import img8 from "../../assests/cetoryimges/img8.jpg"
import img9 from "../../assests/cetoryimges/img9.jpg"
import img10 from "../../assests/cetoryimges/img10.jpg"
import img11 from "../../assests/cetoryimges/img11.jpg"
import img12 from "../../assests/cetoryimges/img12.jpg"







const Category2 = () => {
  return (
   <Flex flexDir={"column"} >
      <Heading mb={10}  fontSize={{ base: "small", sm: "small", md: "large", lg: "xx-large" }}>
      CATEGORIES TO BAG
      </Heading>
     <SimpleGrid gap={0} columns={6} m={"auto"} alignItems={"center"} justifyContent={"center"}>
      <Image boxShadow={"xl"} src={img1} alt='1'/>
      <Image boxShadow={"xl"} src={img2} alt='1'/>
      <Image boxShadow={"xl"} src={img3} alt='1'/>
      <Image boxShadow={"xl"} src={img4} alt='1'/>
      <Image boxShadow={"xl"} src={img5} alt='1'/>
      <Image boxShadow={"xl"} src={img6} alt='1'/>
      <Image boxShadow={"xl"} src={img7} alt='1'/>
      <Image boxShadow={"xl"} src={img8} alt='1'/>
      <Image boxShadow={"xl"} src={img9} alt='1'/>
      <Image boxShadow={"xl"} src={img10} alt='1'/>
      <Image boxShadow={"xl"} src={img11} alt='1'/>
      <Image boxShadow={"xl"} src={img12} alt='1'/>
  



    </SimpleGrid>
   </Flex>
  );
}

export default Category2;
