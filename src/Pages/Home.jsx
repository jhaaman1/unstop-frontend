import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./Home.css";
import { Grid, GridItem } from "@chakra-ui/react";
import FooterOne from "../Components/Footer/FooterOne";
import TrialTwo from "../Components/Slicker/Trial-two";
import Industry from "../Components/Slicker/Industry";

const Home = () => {
  const numColumns = useBreakpointValue({ base: 2, md: 4 });

  return (
    <Box>

      <Box w={["100%", "100%", "100%", "78%"]} m="auto">
        <Box
          display={["block", "block", "flex", "flex"]}
          justifyContent="space-between"
          mt={[5, 5, 95, 10]}
        >
          <Box
            w={["90%", "90%", "70%", "45%"]}
            ml={[2, 2, 2, 2]}
            className="hero-text"
          >
            <Heading
              className="head"
              fontSize={["30px", "30px", "50px", "50px"]}
            >
              <span>Connecting</span>
              <br />
              Talent, Colleges, Recruiters
            </Heading>
            <Text
              className="p-text"
              fontSize={["15px", "10px", "20px", "20px"]}
            >
              Explore opportunities from across the globe to learn, showcase
              skills, gain CV points, & get hired by your dream company.
            </Text>
          </Box>

          <Box w={["100%", "100%", "70%", "45%"]} mt={[4, 4, 4, 4]}>
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
        <hr className="line" />
        <Box className="trustee" mt={[4, 4, 4, 4]} mb={[4, 4, 4, 4]}>
          <Flex display={["block", "block", "block", "flex"]}>
            <Box
              mt={[2, 2, 3, 4]}
              textAlign={["none", "none", "center", "center"]}
              w={["90%", "90%", "100%", "30%"]}
            >
              Industry veterans <br /> <strong>trust us:</strong>
            </Box>
            <Box w={["100%", "100%", "100%", "85%"]}>
              <Industry />
            </Box>
          </Flex>
        </Box>

        <hr />

        <Box className="industry" mt={[6, 4, 4, 4]}>
          <TrialTwo />
        </Box>

        <Box mt={6} >
          <Flex
            justifyContent={["none", "none", "space-between", "space-between"]}
            display={["block", "block", "flex", "flex"]}
            gap={[4, 4, "none", "none"]}
          >
            <Box className="three-box" w={["100%", "100%", "80%", "70%"]}></Box>
            <Box className="three-box" w={["100%", "100%", "80%", "70%"]}></Box>
            <Box className="three-box" w={["100%", "100%", "80%", "70%"]}></Box>
          </Flex>
        </Box>

        <Box mt="5">
          <Text className="explore">Explore Opportunities</Text>
          <Text className="explore-p">
            Participate, Showcase Skills & Gain CV Points through online &
            offline opportunities of your interest & make your mark!
          </Text>
          <Flex flexWrap="wrap">
            <Box
              flexBasis={`${100 / numColumns}%`}
              h={["150px", "150px", "200px", "220px"]}
              className="four-box"
            ></Box>
            <Box
              flexBasis={`${100 / numColumns}%`}
              h={["150px", "150px", "200px", "220px"]}
              className="four-box"
            ></Box>
            <Box
              flexBasis={`${100 / numColumns}%`}
              h={["150px", "150px", "200px", "220px"]}
              className="four-box"
            ></Box>
            <Box
              flexBasis={`${100 / numColumns}%`}
              h={["150px", "150px", "200px", "220px"]}
              className="four-box"
            ></Box>
          </Flex>
        </Box>

        <Box mt="5">
          <Text className="explore">Explore Opportunities</Text>
          <Text className="explore-p">
            Participate, Showcase Skills & Gain CV Points through online &
            offline opportunities of your interest & make your mark!
          </Text>
          <Flex flexWrap="wrap">
            <Box
              flexBasis={`${100 / numColumns}%`}
              h={["150px", "150px", "200px", "220px"]}
              className="four-box"
            ></Box>
            <Box
              flexBasis={`${100 / numColumns}%`}
              h={["150px", "150px", "200px", "220px"]}
              className="four-box"
            ></Box>
            <Box
              flexBasis={`${100 / numColumns}%`}
              h={["150px", "150px", "200px", "220px"]}
              className="four-box"
            ></Box>
            <Box
              flexBasis={`${100 / numColumns}%`}
              h={["150px", "150px", "200px", "220px"]}
              className="four-box"
            ></Box>
          </Flex>
        </Box>

        {/* slider included Here */}

        <Box w="100%" mt={[4, 4, 4, 4]}>
          <Box w="100%" h="30%">
            <Heading className="head-feature">Featured Opportunities</Heading>
            <Text className="text-feature">
              Participate in these exceptional opportunities curated for the
              exceptional you!
            </Text>
          </Box>
          <Box>
            <TrialTwo />
          </Box>
        </Box>

        <Box mt={[6, 6, 6, 6]}>
          <Image src="https://cdn.unstop.com/uploads/images/unstop/mentorship1180x280.jpg?d=1180x280" />
        </Box>

        {/* 1 slider need to put here */}

        <Box mt={[5, 5, 6, 7]}>
          <Image src="https://d8it4huxumps7.cloudfront.net/uploads/images/63db3ac0bfbd4_download_app_new.png?d=2360x912" />
        </Box>
      </Box>
      {/* <Footer /> */}
      <FooterOne />
    </Box>
  );
};

export default Home;
