import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../Password/PasswordInput";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = () => {
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:8080/login/user", payload)
      .then((r) => {
        console.log(r.data);
        if (r.data.token) {
          localStorage.setItem("login_token", r.data.token);
          localStorage.setItem("email", r.data.email);

          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      });
    console.log("ha ji")
  };

  const handleGoogleLogin = () => {
    console.log("hi")
    axios.get(`http://localhost:8080/auth/google`)
    .then((r)=>{
      console.log(r)
    })
    .catch((e)=>{
      console.log(e)
    })
  };
  return (
    <Box className="logincontainer">
      <Heading fontSize={{ base: "2xl", md: "4xl" }} className="heading-login">
        Welcome Back
      </Heading>

      <Box className="inputbox">
        <FormControl isRequired>
          
          <Flex
            justifyContent={"center"}
            margin={"auto"}
            border={"1px solid gray"}
            h={"50px"}
            cursor="pointer"
            w={"60%"}
            mt={'1rem'}
            onClick={handleGoogleLogin}
          >
            <Box  h={"50px"}>
              <Image
                h={"28px"}
                m='auto'
                // m="5px"
                // ml={"10px"}
                mt={"2"}
                src={"https://app.clockify.me/assets/ui-icons/icon-google.svg"}
              ></Image>
            </Box>
            <Spacer />

            <Text
              textAlign={"center"}
              mt={"8px"}
              // w={"20%"}
              fontSize={"19px"}
              color={"#666"}
            >
              Continue with google
            </Text>
          </Flex>

          <Flex alignItems="center" gap="2" mt={'1rem'}>
            <Divider orientation="horizontal" w={"48%"}></Divider>
            <Box>
              <Text fontSize={"20px"}>OR</Text>
            </Box>
            <Divider orientation="horizontal" w={"48%"}></Divider>
          </Flex>


          <Box>
            <FormLabel
              fontSize={["30%", "50%", "80%"]}
              mt="4"
              ml="2"
              className="email-label"
            >
              Email Id
            </FormLabel>
            <Input
              type="email"
              fontSize={["30%", "50%", "80%"]}
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <PasswordInput
              className="passwordlogin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Button variant={"outline"} className="loginbutton" onClick={handleLogin}>
            Login
          </Button>

          <Box className="login-not">
            Don't have an account?{" "}
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
