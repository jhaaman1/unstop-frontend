import React, { useState, useEffect } from "react";
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
  useToast,
} from "@chakra-ui/react";

import "../Styles/Signin.css";
import { postData } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Log from "../Components/Log";
import { gapi } from "gapi-script";
import PasswordInput from "../Components/PasswordInput";

const Client_id =
  "23312408298-dl0daht7fe3qh0e70elps3cjihaj17su.apps.googleusercontent.com";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    const data = { name, email, password };
    dispatch(postData(data, navigate));
  };
  useEffect(() => {
    function initClient() {
      gapi.client.init({
        apiKey: "AIzaSyD6hMforXzwcShHogDTJ43c4EZmBO0_jXo",
        clientId: Client_id,
        scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
        ],
      });
    }
    gapi.load("client:auth2", initClient);
  }, []);

  return (
   

    <Box className="logincontainer">
      <Text className="heading-login">Login</Text>
      <Box className="inputbox" w={["100%", "60%", "50%", "30%"]}>
        {error && <Text>{error}</Text>}
        <form onSubmit={(e) => e.preventDefault()}>
          <Flex
            justifyContent={"center"}
            margin={"auto"}
            border={"1px solid white"}
            h={"50px"}
            cursor="pointer"
            // w={['100%']}
            mt={"1rem"}
          //   onClick={handleGoogleLogin}
          >
            <Box h={"50px"} mt={1}>
              <Log/>
            </Box>
            <Spacer />

            <Text
              textAlign={"center"}
              mt={"2"}
              fontSize={"19px"}
              color={"#666"}
            >
              Continue with google
            </Text>
          </Flex>

          <Flex alignItems="center" gap="2" mt={"1rem"}>
            <Divider
              orientation="horizontal"
              w={"48%"}
              border="0.1px solid white"
            ></Divider>
            <Box>
              <Text fontSize={"20px"} color={"white"}>
                OR
              </Text>
            </Box>
            <Divider
              orientation="horizontal"
              w={"48%"}
              border="0.1px solid white"
            ></Divider>
          </Flex>

          <Box w={["100%", "100%", "100%", "100%"]} mt={[2, 2, 2, 4]}>
            <FormLabel mt="4" className="email-label">
              Full Name
            </FormLabel>
            <Input
              type="text"
              placeholder="Please enter your name"
              id="name"
              value={name}
              color={"white"}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>

          <Box w={["100%", "100%", "100%", "100%"]} mt={[2, 2, 2, 4]}>
            <FormLabel mt="4" className="email-label">
              Email Id
            </FormLabel>
            <Input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              color={"white"}
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

            <Button
              variant={"solid"}
              className="loginbutton"
              onClick={handleSubmit}
              color={"black"}
            >
              Login
            </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Signin;
