import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box
        className="container"
        w={"50%"}
        m={"auto"}
        textAlign={"left"}
        mt={"8rem"}
      >
        <Heading className="header">Learn to code — for free.</Heading>
        <Text className="header">Build projects.</Text>
        <Text className="header">Earn certifications.</Text>
        <Text className="text-font">
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
          jobs at tech companies including:
        </Text>
        <Box></Box>
      </Box>

      <Link to='/login'>
        <Button
          w="500px"
          h="60px"
          ml="30rem"
          mt="2rem"
          alignItems="center"
          color={"#0a0a23"}
          colorScheme={"yellow"}
          variant={"solid"}
        >
          Get Started(it's free)
        </Button>
      </Link>
    </>
  );
};

export default Home;
