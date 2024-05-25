import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { useAddNewUserMutation, useLoginUserMutation } from "../Redux/service/productsService/userAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [addNewUser, {isError, isLoading}] = useLoginUserMutation()
const navigate = useNavigate()
  const handleSubmit = async() => {
    let data = {
      email, password
    }
let res = await addNewUser(data)

if(res.data.token){
  navigate("/")
}
document.cookie = `userData=${JSON.stringify(res)}; path=/`;
document.cookie = `userDataLogin=${JSON.stringify(res?.data?.user)}; path=/`;


  }
  return (
    <Box bg={"#FDEEF1"} overflow="hidden" m={"auto"}>
      <Box
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={6}
        boxShadow="lg"
        m={"auto"}
        mt={"10rem"}
        mb={5}
        bg={"white"}
      >
        <Stack spacing={4}>
          {/* <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input type="text" placeholder="Enter your username" />
        </FormControl> */}
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
          </FormControl>
          {/* <FormControl id="phoneNumber">
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </FormControl> */}
          <Button isLoading={isLoading} onClick={handleSubmit} _hover={{ bg: "#FF3F6C" }} color={"white"} bg="#FF3F6C">
            Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
