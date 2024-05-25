import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import video from "../assests/womenspage/404.mp4"
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
const navigate = useNavigate()
  const handleGoBack = () => {
    // history.push('/');
  };

  return (
    <Box onClick={() => navigate(-1)} cursor={"pointer"} position="relative" height="100vh" width="100vw" overflow="hidden">
       
      <Box
      mt={"10rem"}
        as="video"
        autoPlay
        loop
        muted
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex="-1"
        src={video}
      />
      <Flex
        position="absolute"
        top="170px"
        left="0px"
        right={"1180px"}
        // width="100%"
        // height="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        // bg="rgba(0, 0, 0, 0.5)"
        color="white"
        textAlign="center"
        p={4}
        opacity={19}
      >
        {/* <Text fontSize="4xl" fontWeight="bold" mb={4}>
          Oops! Page Not Found
        </Text>
        <Text fontSize="xl" mb={8}>
          The page you're looking for doesn't exist.
        </Text> */}
      
      </Flex>
    </Box>
  );
};

export default ErrorPage;
