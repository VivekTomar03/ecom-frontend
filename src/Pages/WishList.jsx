import React from 'react';
import {
  Box,
  Heading,
  Text,
  Divider,
  Stack,
  Flex,
  Button,
  IconButton,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import WomensProductList from '../Components/WomensPageComponents/WomensProductList';

const WishList = () => {
  const {  user ,cartUpdateStatus } = useSelector((state) => state.userAuth);

  return (
    <Box p={8} bg="gray.100">
      <Heading mt={"10rem"} as="h2" size="lg" mb={4}>
        My WishList
      </Heading>
      <SimpleGrid spacing={6} columns={{ base: 1, sm: 2, md: 3, lg: 3 }}>
            {user?.wishList?.map((el) => (
              <WomensProductList key={el._id} {...el} data={el}/>
            ))}
          </SimpleGrid>
    </Box>
  );
};

export default WishList;
