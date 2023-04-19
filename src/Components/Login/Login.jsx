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
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../Password/PasswordInput";
import "./Login.css";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const toast = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    const payload = {
      email: email,
      password: password,
      username: name,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/register/add-user",
        payload
      );

      if (response.data.token) {
        localStorage.setItem("login_token", response.data.token);
        localStorage.setItem("email", response.data.email);
        setIsLoggedIn(true);
        toast({
          title: "Login successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setIsLoading(false);
        setEmail("");
        setPassword("");
        setName("");
        //now navigate it to home page
        navigate("/home");
      } else if (response.data.message === "Email already exists") {
        setError("Email id already exists");
        setIsLoading(false);
        toast({
          title: "Email id already exists",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        setError("Invalid email or password");
        setIsLoading(false);
        toast({
          title: "Invalid email or password",
          status: "failed",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      setError("Something went wrong");
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    axios
      .get(`http://localhost:8080/auth/google`, {
        withCredentials: true,
      })
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("login_token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // if (isLoggedIn) {
  //   return (
  //     <div>
  //       <p>You are already logged in!</p>
  //     </div>
  //   );
  // }

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
            onClick={handleGoogleLogin}
          >
            <Box h={"50px"}>
              <Image
                h={"28px"}
                m="auto"
                // m="5px"
                // ml={"10px"}
                mt={"2"}
                src={"https://app.clockify.me/assets/ui-icons/icon-google.svg"}
              ></Image>
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
            onClick={handleLogin}
            disabled={isLoading}
            color={"black"}
          >
             {isLoading ? "Loading..." : "Login"}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
