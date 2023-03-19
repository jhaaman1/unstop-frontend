import {
  Box,
  Flex,
  Image,
  Text,
  Icon,
  VStack,
  StackDivider,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import "./Footer.css";
import {
  AiFillHeart,
  AiOutlineMail,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsTelephone, BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      w={["100%", "100%", "100%", "100%"]}
      border="2px solid red"
      textColor={"white"}
    >
      {/* <Box w={'78%'} border='2px solid green' m={'auto'}> */}
      <Flex>
        <Box w="40%" border={"3px solid black"} className="footer-left">
          <VStack
            // divider={<StackDivider />}
            spacing={4}
            align="stretch"
            w={"50%"}
            m="auto"
          >
            <Box>
              <Image src="https://d8it4huxumps7.cloudfront.net/uploads/images/63ee0282cefc5_unstop_logo.svg" />
              <Text mt="4" className="footer-fav">
                Built with <Icon className="heart-icon" as={AiFillHeart} /> in
                India for the world
              </Text>
            </Box>
            <Box>
              <Text className="footer-text">Stay Connected</Text>
              <Link to="#">
                <HStack mt="2">
                  <Icon as={AiOutlineMail} />
                  <Text>sales@unstop.com</Text>
                </HStack>
              </Link>
              <Link to="#">
                <HStack mt="2">
                  <Icon as={BsTelephone} />
                  <Text fontSize={"16px"}>+91-9311777388 </Text>
                </HStack>
              </Link>
              <HStack mt="2" borderBottom="1px dashed #1c4980" pb="16px">
                <Link>
                  <Icon className="socail-icon" as={AiOutlineInstagram} />
                </Link>
                <Link>
                  <Icon className="socail-icon" as={AiFillLinkedin} />
                </Link>
                <Link>
                  <Icon as={AiFillFacebook} className="socail-icon" />
                </Link>
                <Link>
                  <Icon as={BsTelegram} className="socail-icon" />
                </Link>
                <Link>
                  <Icon as={AiFillTwitterSquare} className="socail-icon" />
                </Link>
                <Link>
                  <Icon as={AiOutlineYoutube} className="socail-icon" />
                </Link>
              </HStack>
            </Box>
            <Box borderBottom="1px dashed #1c4980" pb="16px">
              <Text className="footer-text">Stay Updated</Text>
              <Text>
                We'll send you updates on the latest opportunities to showcase
                your talent and get hired and rewarded regularly.
              </Text>
              <Box className="footer-text-p">
                <Link>
                  Sign up for our newsletter <em className="footer-em">Send</em>
                </Link>
              </Box>
            </Box>
            <Box borderBottom="1px dashed #1c4980" pb="16px">
              <Text  className="footer-text">Download Unstop App</Text>
              <Flex gap={5}>
                <Link to="#">
                  <Image src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/google-play.svg" />
                </Link>
                <Link to="#">
                  <Image src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/app-store.svg" />
                </Link>
              </Flex>
            </Box>
            <Box>
                <Text>Best Viewed in Latest Versions of Edge, Mozilla, Chrome, Opera & Safari. V: 3.17.2023.18.44</Text>
            </Box>
            <Box>
                <Text fontSize={'10px'}>Copyright © 2023 FLIVE Consulting Pvt Ltd - All rights reserved.</Text>
            </Box>
          </VStack>
        </Box>
        <Box w="60%" bgColor={"#1c4980"} border={"3px solid black"}>
            
        </Box>
      </Flex>
      {/* </Box> */}
    </Box>
  );
};

export default Footer;
