import React from 'react';
import { Flex, Box, Skeleton, VStack, HStack } from '@chakra-ui/react';

const ProdDetailSkeleton = () => {
  return (
    <Flex p={5} alignItems={"flex-start"} gap={10} flexDirection={{ base: "column", md: "row", lg:"row" }} >
      <Box
        mt={{ base: 0, md: "10rem" }}
        maxW={{ base: "100%", md: "50%" }}
        borderRadius="md"
        overflow="hidden"
        boxShadow="xl"
        transition="all 0.3s"
        _hover={{ boxShadow: "2xl", transform: "scale(1.02)" }}
      >
        <Skeleton height="300px" width="300px" />
      </Box>
      <VStack mt={{ base: 0, md: "10rem" }} align="start" spacing={4} maxW={{ base: "100%", md: "50%" }}>
        <Skeleton height="30px" width="100%" />
        <Skeleton height="20px" width="60%" />
        <Skeleton height="20px" width="40%" />
        <Skeleton height="20px" width="60%" />
        <Skeleton height="20px" width="50%" />
        <HStack wrap={"wrap"} spacing={4}>
          <Skeleton height="30px" width="60px" />
          <Skeleton height="30px" width="60px" />
          <Skeleton height="30px" width="60px" />
        </HStack>
        <HStack wrap={"wrap"} spacing={4}>
          <Skeleton height="40px" width="150px" />
          <Skeleton height="40px" width="150px" />
        </HStack>
        <Flex flexDir={{base:"column", sm:"column", md:"column", lg:"row"}} w={"100%"} justifyContent={"space-between"}>
          <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
            <Skeleton height="20px" width="100%" />
            <VStack align="start" spacing={1}>
              <Skeleton height="20px" width="100%" />
              <Skeleton height="20px" width="100%" />
              <Skeleton height="20px" width="100%" />
              <Skeleton height="20px" width="100%" />
            </VStack>
          </Box>
          <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
            <Skeleton height="20px" width="100%" />
            <VStack align="start" spacing={1}>
              <Skeleton height="20px" width="100%" />
              <Skeleton height="20px" width="100%" />
            </VStack>
          </Box>
        </Flex>
        <Box w="100%" p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
          <Skeleton height="20px" width="100%" />
          <VStack align="start" spacing={1}>
            <Skeleton height="20px" width="100%" />
            <Skeleton height="20px" width="100%" />
            <Skeleton height="20px" width="100%" />
          </VStack>
        </Box>
        <Box w="100%" p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
          <Skeleton height="20px" width="100%" />
          <HStack spacing={1} alignItems="center" mb={2}>
            <Skeleton height="20px" width="20px" />
            <Skeleton height="20px" width="100%" />
          </HStack>
          <Skeleton height="20px" width="100%" />
          <Skeleton height="20px" width="100%" />
          <Skeleton height="20px" width="100%" />
          <Skeleton height="20px" width="100%" />
        </Box>
      </VStack>
    </Flex>
  );
};

export default ProdDetailSkeleton;
