import {
  Flex,
  Image,
  Text,
  Heading,
  Button,
  Box,
  VStack,
  HStack,
  Stack,
  Badge,
  useToast,
} from "@chakra-ui/react";
import {
  AddIcon,
  AttachmentIcon,
  CheckCircleIcon,
  InfoOutlineIcon,
  SettingsIcon,
  StarIcon,
} from "@chakra-ui/icons";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductDetailQuery } from "../Redux/service/productsService/products";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

import ErrorPage from "./Error";
import ProdDetailSkeleton from "./Skeleton/ProdDetailSkeleton";

import { useDispatch, useSelector } from "react-redux";
import { updateCart, updateWishlist } from "../Redux/feature/userAuthSlice";
const ProductDetail = () => {
  const { id } = useParams();
  const { cartUpdateStatus } = useSelector((state) => state.userAuth);
 
  const navigate = useNavigate();
  const { data, isError, isLoading } = useGetProductDetailQuery(id);

  const toast = useToast();
  const dispatch = useDispatch();
  
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const handleCartUpdate = async () => {
    try {
      let res = await dispatch(updateCart(data));
    if(res?.payload?.message){
      toast({
        title:res?.payload?.message,
        position: "bottom",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
      if (res.payload && !res.payload?.msg) {
      
        toast({
          title: "Item Added To Cart Successfully",
          position: "bottom",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/cart");
       }
      
      
      if (res.payload?.msg) {
        toast({
          title: "Item Already In Cart",
          position: "bottom",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: error.message,
        position: "bottom",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleAddTYoWishList = async (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    let res = await dispatch(updateWishlist(data));
    //  userAuth/updateWishlist/fulfilled
    if (res?.type === "userAuth/updateWishlist/fulfilled") {
      toast({
        title: "Item Add To Wishlist Successfully",
        position: "bottom",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  if (isError) return <ErrorPage />;
  if (isLoading) return <ProdDetailSkeleton />;
  return (
    <Flex
      p={5}
      alignItems={"flex-start"}
      gap={10}
      flexDirection={{ base: "column", md: "row", lg: "row" }}
    >
      <Box
        mt={{ base: 0, md: "10rem" }}
        maxW={{ base: "100%", md: "50%" }}
        borderRadius="md"
        overflow="hidden"
        boxShadow="xl"
        transition="all 0.3s"
        _hover={{ boxShadow: "2xl", transform: "scale(1.02)" }}
      >
        <Image
          src={data?._image}
          alt={data?.title}
          objectFit="cover"
          w="100%"
          h="auto"
          transition="transform 0.3s"
        />
      </Box>
      <VStack
        mt={{ base: 0, md: "10rem" }}
        align="start"
        spacing={4}
        maxW={{ base: "100%", md: "50%" }}
      >
        <Heading>{data?.title}</Heading>
        <HStack spacing={2} alignItems="center">
          <Text fontWeight="bold" color="black">
            {"RS " + data?.price2}
          </Text>
          <Text textDecor="line-through" color="gray.500">
            {"RS " + data?.price1}
          </Text>
          <Badge colorScheme="pink">{data?.discount}</Badge>
        </HStack>
        <Text color={"#03A685"}>inclusive of all taxes</Text>
        <Flex alignItems="center" gap={6}>
          <Text>Size</Text>
          <Text color="blue.500" cursor="pointer">
            Size Chart
          </Text>
        </Flex>
        <HStack wrap={"wrap"} spacing={4}>
          {data?.size?.split(",")?.map((size, index) => (
            <Button
              key={index}
              variant="outline"
              size="md"
              borderRadius="full"
              colorScheme="teal"
              _hover={{ bg: "teal.500", color: "white" }}
              _focus={{ boxShadow: "outline" }}
            >
              {size}
            </Button>
          ))}
        </HStack>
        <HStack wrap={"wrap"} spacing={4}>
          <Button
            w={{ base: "full", sm: "max-content", lg: "max-content" }}
            leftIcon={<IoBagOutline />}
            bg="#FF527B"
            size="lg"
            borderRadius="md"
            _hover={{ bg: "#FF527B" }}
            _focus={{ boxShadow: "outline" }}
            color={"white"}
            onClick={() => handleCartUpdate()}
            isLoading={cartUpdateStatus}
          >
            Add To Cart
          </Button>
          <Button
            w={{ base: "full", sm: "max-content", lg: "max-content" }}
            leftIcon={<CiHeart />}
            variant="outline"
            colorScheme="blue"
            size="lg"
            borderRadius="md"
            _hover={{ bg: "blue.100" }}
            _focus={{ boxShadow: "outline" }}
            onClick={handleAddTYoWishList}
          >
            Wishlist
          </Button>
        </HStack>
        <Flex
          flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
          w={"100%"}
          justifyContent={"space-between"}
        >
          <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
            <HStack spacing={2} alignItems="center" mb={2}>
              <InfoOutlineIcon color="teal.500" />
              <Heading size="md" color="teal.600">
                PRODUCT DETAILS
              </Heading>
            </HStack>
            <VStack align="start" spacing={1}>
              <Text>Slim fit, mid-rise</Text>
              <Text>Clean look</Text>
              <Text>Stretchable</Text>
              <Text>Length: regular</Text>
            </VStack>
          </Box>
          <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
            <HStack spacing={2} alignItems="center" mb={2}>
              <CheckCircleIcon color="green.500" />
              <Heading size="md" color="green.600">
                MATERIAL & CARE
              </Heading>
            </HStack>
            <VStack align="start" spacing={1}>
              <Text>89% cotton, 9% polyester, 2% elastane</Text>
              <Text>Machine Wash</Text>
            </VStack>
          </Box>
        </Flex>
        <Box w="100%" p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
          <HStack spacing={2} alignItems="center" mb={2}>
            <SettingsIcon color="purple.500" />
            <Heading size="md" color="purple.600">
              SPECIFICATIONS
            </Heading>
          </HStack>
          <VStack align="start" spacing={1}>
            <Flex justifyContent="space-between" w="full">
              <Text>Distress</Text>
              <Text>Waist Rise</Text>
            </Flex>
            <Flex justifyContent="space-between" w="full">
              <Text>Clean Look</Text>
              <Text>Mid-Rise</Text>
            </Flex>
            <Flex justifyContent="space-between" w="full">
              <Text>Light Fade</Text>
              <Text>Medium</Text>
            </Flex>
          </VStack>
        </Box>
        <Box w="100%" p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
          <HStack spacing={2} alignItems="center" mb={2}>
            <AttachmentIcon color="yellow.500" />
            <Heading size="md" color="yellow.600">
              RATINGS & REVIEWS
            </Heading>
          </HStack>
          <HStack spacing={1}>
            <StarIcon color="yellow.400" />
            <StarIcon color="yellow.400" />
            <StarIcon color="yellow.400" />
            <StarIcon color="yellow.400" />
            <StarIcon color="gray.300" />
            <Text>(120 reviews)</Text>
          </HStack>
          <VStack align="start" spacing={2} mt={4}>
            <Box>
              <Text fontWeight="bold">John Doe</Text>
              <HStack spacing={1}>
                <StarIcon color="yellow.400" />
                <StarIcon color="yellow.400" />
                <StarIcon color="yellow.400" />
                <StarIcon color="yellow.400" />
                <StarIcon color="gray.300" />
              </HStack>
              <Text color="gray.600">Great product, highly recommend!</Text>
            </Box>
            {/* Add more reviews similarly */}
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
};

export default ProductDetail;
