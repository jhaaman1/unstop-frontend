import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./Home.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Responsive, { Industry } from "../Components/Slicker/Industry";
import Footer from "../Components/Footer/Footer";
import Carousel from "../Components/Slicker/Industry";
import CaptionCarousel from "../Components/Slicker/Industry";
import Trial from "../Components/Slicker/Trial";
import FooterOne from "../Components/Footer/FooterOne";

const Home = () => {
  return (
    <Box>
      <Box boxShadow={"base"} h="55px">
        <Navbar />
      </Box>

      <Box border={"2px solid red"} w={"78%"} m="auto">
        <Box
          display={["block", "block", "flex", "flex"]}
          justifyContent="space-between"
          mt={[5, 5, 5, 10]}
        >
          <Box w={"45%"} className="hero-text">
            <Heading className="head">
              <span>Connecting</span>
              <br />
              Talent, Colleges, Recruiters
            </Heading>
            <Text className="p-text">
              Explore opportunities from across the globe to learn, showcase
              skills, gain CV points, & get hired by your dream company.
            </Text>
          </Box>
          <Box w="45%">
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <GridItem w="100%" h="120px" className="grid-item" />
              <GridItem w="100%" h="120px" className="grid-item" />
              <GridItem w="100%" h="120px" className="grid-item" />
              <GridItem w="100%" h="120px" className="grid-item" />
              <GridItem w="100%" h="120px" className="grid-item" />
              <GridItem w="100%" h="120px" className="grid-item" />
            </Grid>
          </Box>
        </Box>

        {/* industry vetran */}

        <hr />

        <Box className="industry">
          {/* <Trial/> */}
          {/* <CaptionCarousel/> */}
        </Box>

        <Box mt={6}>
          <Flex justifyContent={"space-between"}>
            <Box className="three-box"></Box>
            <Box className="three-box"></Box>
            <Box className="three-box"></Box>
          </Flex>
        </Box>

        <Box mt='5'> 
          <Text className="explore">Explore Opportunities</Text>
          <Text className="explore-p">Participate, Showcase Skills & Gain CV Points through online & offline opportunities of your interest & make your mark!</Text>
          <Flex>
            <Box className="four-box"></Box>
            <Box className="four-box"></Box>
            <Box className="four-box"></Box>
            <Box className="four-box"></Box>
          </Flex>
        </Box>

        <Box mt='5'> 
          <Text className="explore">Explore Opportunities</Text>
          <Text className="explore-p">Participate, Showcase Skills & Gain CV Points through online & offline opportunities of your interest & make your mark!</Text>
          <Flex>
            <Box className="four-box"></Box>
            <Box className="four-box"></Box>
            <Box className="four-box"></Box>
            <Box className="four-box"></Box>
          </Flex>
        </Box>

        {/* slider included Here */}


        <Box mt={4}><Image src="https://cdn.unstop.com/uploads/images/unstop/mentorship1180x280.jpg?d=1180x280"/></Box>

        {/* 1 slider need to put here */}


        <Box mt={4}><Image src="https://d8it4huxumps7.cloudfront.net/uploads/images/63db3ac0bfbd4_download_app_new.png?d=2360x912"/></Box>
      </Box>
      {/* <Footer /> */}
      <FooterOne/>
    </Box>
  );
};

export default Home;
