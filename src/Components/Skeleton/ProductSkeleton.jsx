import React from 'react';
import { Box, Stack, Skeleton, AspectRatio, Image, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react';

const ProductSkeleton = () => {
  return (
    <Flex flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
    gap={10}> 
<Skeleton height={{base: "200px", sm: "200px", md: "500px", lg: "800px"}} width={{base: "100%", sm: "45%", md: "30%", lg: "40%"}} />
     <SimpleGrid w={"100%"} spacing={6} columns={{ base: 1, sm: 2, md: 3, lg: 3 }}>
     {[...Array(9)].map((_, index) => (
        <Box
          key={index}
         
          borderRadius="lg"
          overflow="hidden"
          boxShadow="xl"
          transition="0.3s ease"
          as="div"
          width={{ base: "100%", sm: "45%", md: "30%", lg: "70%" }}
          marginBottom="2rem"
        >
          <Skeleton height={{ base: "200px", sm: "200px", md: "300px", lg: "300px" }} />
          <Stack mt="4" p="4" spacing="3">
            <Skeleton height="20px" width="80%" />
            <Skeleton height="20px" width="70%" />
            <Skeleton height="20px" width="40%" />
            <Flex alignItems="center" gap={2}>
              <Skeleton height="20px" width="30%" />
              <Skeleton height="20px" width="20%" />
              <Skeleton height="20px" width="10%" />
            </Flex>
          </Stack>
        </Box>
      ))}
     </SimpleGrid>
    </Flex>
  );
};

export default ProductSkeleton;
