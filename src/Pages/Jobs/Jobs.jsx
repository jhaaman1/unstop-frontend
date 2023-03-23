import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "./Jobs.css"

const Jobs = () => {
  return (
    <Box w="100%" h="100vh">
      <Box
        m="auto"
        w={["100%", "100%", "80%", "78%"]}
        mt={[8, 8, 8, 8]}
      >
        <Flex
          justifyContent={["block", "block", "space-between", "space-between"]}
        >
          <Box
            mt={[8, 8, 8, 8]}
            w={["100%", "100%", "50%", "50%"]}
          >
            <Heading
              fontSize={"50px"}
              lineHeight="50px"
              mb={"10px"}
              color="#1c4980"
              fontWeight={700}
            >
              Jobs, Internships <br /> & Hiring Challenges
            </Heading>
            <Text
              fontSize={"20px"}
              mt={"26px"}
              fontWeight={500}
              color="#1c4980"
              w={["100%","100%","50%","90%"]}
            >
              Apply to a plethora of hiring opportunities & work with your dream
              companies!
            </Text>
            <HStack h={"10%"} mt={"20px"}>
              <Button colorScheme="teal" variant="solid">
                Explore Now
              </Button>
              <Button colorScheme="teal" variant="outline">
                Post Jobs/Internships
              </Button>
            </HStack>

            <Flex mt={[4,4,4,6]} justifyContent="space-between">
              <Box className="three-boxes-jobs" ></Box>
              <Box className="three-boxes-jobs" ></Box>
              <Box className="three-boxes-jobs" ></Box>
            </Flex>
          </Box>
          <Box
            pt={10}
            w={["100%", "100%", "50%", "50%"]}
          >
            <Image
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/job/Job-opportunities.png?d=900x700"
              alt=""
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Jobs;
