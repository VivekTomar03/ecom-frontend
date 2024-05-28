import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import MensProducts from '../Components/MensComponents/MensPreoducts';

const MensProduct = () => {
  return (
    <Flex  pl={10} pr={10} flexDir={"column"} gap={20}>
    {/* <WomensSlider /> */}
    <MensProducts />
    </Flex>
  );
}

export default MensProduct;
