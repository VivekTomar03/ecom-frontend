import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,

} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/feature/userAuthSlice";
import ErrorPage from "../Components/Error";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {  loading, error } = useSelector((state) => state.userAuth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    let data = {
      email,
      password,
    };

   let res = await  dispatch(loginUser(data));

    if (res?.payload?.token) {
      navigate("/");
    }
  };

  if(error){
    return <ErrorPage/>
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
        pt={9}
        pb={9}
      >
        <Stack spacing={4}>
          {/* <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input type="text" placeholder="Enter your username" />
        </FormControl> */}
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </FormControl>
          {/* <FormControl id="phoneNumber">
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </FormControl> */}
          <Button
            isLoading={loading}
            onClick={handleSubmit}
            _hover={{ bg: "#FF3F6C" }}
            color={"white"}
            bg="#FF3F6C"
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
