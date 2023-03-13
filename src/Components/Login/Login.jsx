import { Box, Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../Password/PasswordInput";
import "./Login.css";

const Login = () => {
  return (
    <Box className="logincontainer" >
      <Heading fontSize={{ base: "2xl", md: "4xl" }} className="heading-login">
        Welcome Back
      </Heading>

      <Box className="inputbox">
        <FormControl isRequired>
          <Box>
            <FormLabel
              fontSize={["30%","50%","80%"]}
              mt="4"
              ml="2"
              className="email-label"
            >
              Email Id
            </FormLabel>
            <Input
              type="text"
              fontSize={["30%","50%","80%"]}
              placeholder="Email"
            />
          </Box>
          <Box>
            <FormLabel
              fontSize={{ base: "md", md: "lg" }}
              mt="4"
              ml="2"
              className="email-label"
            >
              Password
            </FormLabel>
            <PasswordInput className="passwordlogin" />
          </Box>

          <Button variant={'outline'} className="loginbutton">Login</Button>

          <Box className="login-not">Don't have an account? <span><Link to="/signup">Sign Up</Link></span></Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
