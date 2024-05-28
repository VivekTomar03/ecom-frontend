import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateWishlist } from "../../Redux/feature/userAuthSlice";

const WomensProductList = ({ data }) => {
  const { _image, title, brand, price1, price2, discount, _id } = data;
  const [showWishlist, setShowWishlist] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartUpdateStatus } = useSelector((state) => state.userAuth);
  const toast = useToast();
  
  const handleAddTYoWishList = async (e) => {
    e.preventDefault();
    e.stopPropagation();
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
  return (
    <Card
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      boxShadow="md"
      borderRadius="lg"
      shadow={"xl"}
      overflow="hidden"
      _hover={{ boxShadow: "lg" }}
      transition="0.3s ease"
      as={Link}
      to={`/product/${_id}`}
    >
      <CardBody p={0}>
        <Box aspectRatio={{ base: 2, sm: 2, md: 2, lg: 1 }} overflow="hidden">
          <Image
            src={_image}
            alt={title}
            objectFit="cover"
            w="100%"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.05)" }}
          />
          {isOpen && (
            <Button
              onClick={handleAddTYoWishList}
              position="absolute"
              top="4"
              right="4"
              bg="#FF57A5"
              color={"white"}
              _hover={{ bg: "#FF57A5" }}
              size="sm"
              opacity={0.9}
              isLoading={cartUpdateStatus}
            >
              Wishlist
            </Button>
          )}
        </Box>
        <Stack mt="4" p="4" spacing="3">
          <Heading size="sm">{title}</Heading>
          <Text color="gray.500">{brand}</Text>
          <Flex alignItems="center" gap={2}>
            <Text fontWeight="bold" color="black">
              {"RS " + price2}
            </Text>
            <Text textDecor="line-through" color="gray.500">
              {"RS " + price1}
            </Text>
            <Text color="#FF9EBA">{discount}</Text>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default WomensProductList;
