import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./Home.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Responsive, { Industry } from "../Components/Slicker/Industry";
import Footer from "../Components/Footer/Footer";

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
          mt={[5,5,5,10]}
        >
          <Box border={"2px solid blue"} w={"45%"} className="hero-text">
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
          <Box border={"2px solid green"} w="45%">
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <GridItem w="100%" h="120px" className="grid-item"  />
              <GridItem w="100%" h="120px" className="grid-item"  />
              <GridItem w="100%" h="120px" className="grid-item"  />
              <GridItem w="100%" h="120px" className="grid-item"  />
              <GridItem w="100%" h="120px" className="grid-item"  />
              <GridItem w="100%" h="120px" className="grid-item"  />
            </Grid>
          </Box>

        </Box>

        {/* industry vetran */}

        <hr />

        <Box className="industry">
          {/* <Industry/> */}
        </Box>



      </Box>
        <Footer/>
    </Box>
  );
};

export default Home;
