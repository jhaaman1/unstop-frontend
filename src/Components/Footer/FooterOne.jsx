import { Flex, Box, Icon, Link, Text } from "@chakra-ui/react";
import {
    FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const FooterOne = () => {
  return (
    <Box bg="gray.900" py={8}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify={{ md: "space-between" }}
        maxW="960px"
        mx="auto"
      >
        <Flex align="center" mb={{ base: 4, md: 0 }}>
          <Icon as={FaDribbble} boxSize={10} color="white" mr={4} />
          <Text color="white" fontWeight="bold" fontSize="2xl">
            Product Name
          </Text>
        </Flex>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          mt={{ base: 4, md: 0 }}
        >
          <Box mr={{ base: 0, md: 12 }}>
            <Text color="white" fontWeight="bold" fontSize="xl" mb={4}>
              Product
            </Text>
            <Box as="ul" listStyleType="none" pl={0} color='white'>
              <li>
                <Link href="#">Overview</Link>
              </li>
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Tutorials</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Releases</Link>
              </li>
            </Box>
          </Box>
          <Box mr={{ base: 0, md: 12 }}>
            <Text color="white" fontWeight="bold" fontSize="xl" mb={4}>
              Company
            </Text>
            <Box as="ul" listStyleType="none" color='white' pl={0}>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Press</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Partners</Link>
              </li>
            </Box>
          </Box>
          <Box>
            <Text color="white" fontWeight="bold" fontSize="xl" mb={4}>
              Support
            </Text>
            <Box as="ul" listStyleType="none" color='white' pl={0}>
              <li>
                <Link href="#">Help Center</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Legal</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Status</Link>
              </li>
            </Box>
          </Box>
        </Flex>
        <Flex
          justify={{ base: "center", md: "flex-end" }}
          mt={{ base: 8, md: 0 }}
        >
          <Link href="#">
            <Icon as={FaFacebookF} boxSize={6} color="white" mr={4} />
          </Link>
          <Link href="#">
            <Icon as={FaTwitter} boxSize={6} color="white" mr={4} />
          </Link>
          <Link href="#">
            <Icon as={FaDribbble} boxSize={6} color="white" mr={4} />
          </Link>
          <Link href="#">
            <Icon as={FaInstagram} boxSize={6} color="white" mr={4} />
          </Link>
          <Link href="#">
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FooterOne;
