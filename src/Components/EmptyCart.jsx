import { Flex, Heading, Image, Text, Box, Button } from '@chakra-ui/react';
import React from 'react';
import empty from "../assests/womenspage/empty.png";
import { useNavigate } from 'react-router-dom';

const EmptyCart = ({ searchTerm , setSearchTerm}) => {
    const mavigate = useNavigate()
  return (
    <Box>
    <Flex
    
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={6}
      p={6}
      textAlign="center"
     
     
      w="full"
    >
      <Image mt={"8rem"} src={"https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"} alt="empty" maxW="300px" mb={4} />
      <Heading size="lg">Hey it feel so right!</Heading>
      <Text>There is nothing in your bag lets add some item</Text>
    
    </Flex>
    </Box>
  );
}

export default EmptyCart;
