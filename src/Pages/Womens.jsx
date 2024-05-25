import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import WomensSlider from '../Components/WomensPageComponents/WomensSlider';
import WomensProducts from '../Components/WomensPageComponents/WomensProducts';

const Womens = () => {



  return (
    <Flex  pl={10} pr={10} flexDir={"column"} gap={20}>
    <WomensSlider />
    <WomensProducts />
    </Flex>
  );
}

export default Womens;
