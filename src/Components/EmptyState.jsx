import { Flex, Heading, Image, Text, Box, Button } from '@chakra-ui/react';
import React from 'react';
import empty from "../assests/womenspage/empty.png";
import { useNavigate } from 'react-router-dom';

const EmptyState = ({ searchTerm , setSearchTerm}) => {
    const mavigate = useNavigate()
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={6}
      p={6}
      textAlign="center"
      bg="gray.50"
      borderRadius="md"
      boxShadow="lg"
      w="full"
    >
      <Image src={empty} alt="empty" maxW="300px" mb={4} />
      <Heading size="lg">We couldn't find any matches!</Heading>
    {searchTerm &&  <Text fontSize="lg">You searched for "{searchTerm}"</Text>}
      <Text>Please check the spelling or try searching for something else.</Text>
      <Box>
        <Text mb={2} fontWeight="bold">Popular searches:</Text>
        <Text color="grey">Nike Shoes, Woodland Shoes, Adidas Shoes, Titan Watches, Fila Shoes, Puma Shoes, Fastrack Watches</Text>
      </Box>
      <Flex justifyContent={"space-around"} wrap={"wrap"} gap={4} mt={4}>
        <Button onClick={() => mavigate("/mens")} color="#FF527B" variant="outline">Men's Page</Button>
        <Button  onClick={() =>setSearchTerm("")} color="#FF527B" variant="outline">Women's Page</Button>
        <Button  onClick={() => mavigate("/kids")} color="#FF527B" variant="outline">Kids' Page</Button>
      </Flex>
    </Flex>
  );
}

export default EmptyState;
