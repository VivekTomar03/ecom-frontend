import { ReactNode, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  Image,
  InputGroup,
  InputRightElement,
  Text,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { textColor } from "../assests/ColorConstant";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import logo from "../assests/iloveimg-converted/logo.jpg";
import { useSelector } from "react-redux";
import { getUserDataFromCookies, getUserDataFromCookiesdata } from "./GetUserCookiesdata";

const Links = ["Download App", "Become Supplier", "News Room"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);
export const updatecartNum = (userData) => {
return userData
}
export default function Topbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const userData = getUserDataFromCookies();

  const userDataLogin = getUserDataFromCookiesdata()
  console.log(userDataLogin)
  const handleLogout = () => {
    let res = {
      data:{
        name:"",
        token:"",
        userType:"",
        message:""
      }
    }
    document.cookie = `userData=${JSON.stringify(res)}; path=/`;
    navigate("/")
  }

 useEffect(() => {
  updatecartNum(userData)
 },[userData])
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Image
              onClick={() => navigate("/")}
              w={{ base: "60px", md: "100px", lg: "124px" }}
              h={"74px"}
              src={logo}
              alt="logo"
            />
            <InputGroup display={{ base: "none", md: "flex" }}>
              <Input
                type="text"
                border={"1px solid grey"}
                placeholder="Search Your Produc ..."
                _focusVisible={{ border: `1px solid ${textColor}` }}
                _placeholder={{ color: textColor }}
                bg={"white"}
                rounded="md"
                w={{ md: "230px" }}
                fontSize={"11px"}
                lineHeight={"18px"}
                color={"black"}
              />
              <InputRightElement width={{ md: "2rem" }}>
                <IconButton
                  bgGradient="linear(to-l, #9F2098, #9F2091)"
                  _hover={{
                    bgGradient: "linear(to-l, #9F2098, #9F2091)",
                  }}
                  aria-label="Search database"
                  color={"white"}
                  icon={<SearchIcon />}
                  h={"2.5rem"}
                  w={"50px"}
                  roundedLeft={"sm"}
                />
              </InputRightElement>
            </InputGroup>
          </HStack>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <Flex key={link}>
                <NavLink key={link}>{link}</NavLink>
              </Flex>
            ))}
          </HStack>
          <Flex gap={4} alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList  zIndex={200000000}>
                {/* <MenuItem onClick={() => navigate("/login")}>Login</MenuItem> */}
                <MenuItem _hover={{bg:"white"}}>{LoginData(userData)}</MenuItem>
                <MenuDivider />
                <MenuItem>Orders</MenuItem>
                <MenuItem>Wishlist</MenuItem>
                <MenuItem>Gift Card</MenuItem>
                <MenuItem>Contact Us</MenuItem>
               {userData?.data?.name &&  <MenuItem onClick={handleLogout}>Logout</MenuItem>}
              </MenuList>
            </Menu>
            <Flex onClick={() => navigate("/cart")} position="relative" alignItems="center">
              <Icon as={CiShoppingCart} w={8} h={8} />
            
             {userDataLogin?.cart?.length>0 && <Box
                position="absolute"
                top="-1"
                right="-1"
                backgroundColor="red.500"
                color="white"
                borderRadius="full"
                width="20px"
                height="20px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="12px"
              >
                { userDataLogin?.cart?.length }
              </Box>
             }
            </Flex>
            <Menu>
              <Icon as={CiHeart} w={8} h={8} />
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

function LoginData(userData){
  const navigate = useNavigate()

  
  return (
    <Box 
      // p={{ base: 4, md: 8 }} 
      // borderWidth={1} 
      // borderRadius="md" 
      // boxShadow="md" 
      // maxW={{ base: "sm", md: "md" }} 
      // mx="auto" 
      // my={{ base: 6, md: 10 }} 
      textAlign={{base:"start", lg:"center"}}
      txtAlign={{base:"start", lg:"center"}}
    >
      <VStack spacing={4}>
        <Text 
          fontSize={{ base: "l", md: "2xl" }} 
          fontWeight="bold" 
          color="teal.600"
        
        >
          {userData?.data?.name ? `Welcome, ${userData.data.name}` : 'Welcome to Our Store'}
        </Text>
        {!userData?.data?.name && (
          <>
            <Text 
              fontSize={{ base: "sm", md: "md" }} 
              color="gray.600"
              overflow={"hidden"}
              display={{base:"none", sm:"none", md:"block", lg:"block"}}
            >
              To access your account and manage orders, please log in or sign up.
            </Text>
            <HStack  spacing={4} flexDirection={{ base: 'column', md: 'row' }}>
              <Button 
                colorScheme="teal" 
                size="lg" 
                width={{ base: 'full', md: 'auto' }}
                onClick={() => navigate('/login')}
                _hover={{ bg: "teal.500" }}
              >
                Login
              </Button>
              <Button 
                colorScheme="pink" 
                size="lg" 
                width={{ base: 'full', md: 'auto' }}
                onClick={() => navigate('/register')}
                _hover={{ bg: "pink.500" }}
              >
                Sign Up
              </Button>
            </HStack>
          </>
        )}
      </VStack>
    </Box>
  )
}