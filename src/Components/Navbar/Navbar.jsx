import {
  Box,
  Flex,
  Image,
  Spacer,
  Icon,
  useDisclosure,
  Button,
  Avatar,
  Text,
  Hide,
  Show,
  HStack,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import DrawerMenu from "./DrawerMenu";
import { Link, useNavigate } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false); // Initialize the isLoggedIn state to false
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const token = localStorage.getItem("login_token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("login_token");
    localStorage.removeItem("email");
    setLoggedIn(false);
    navigate("/login");
  };

  return (
    <Box
      className="nav"
      w={["100%", "100%", "100%", "78%"]}
      h={["100%", "100%", "100%", "40%"]}
    >
      <Flex
        gap={4}
        justifyContent={["space-between", "space-between", "none", "none"]}
      >
        <Box className="logo" mt={2}>
          <Image
            className="imagelogo"
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
            alt=""
            w={"82px"}
            h={"32px"}
          />
        </Box>
        {/* <Box mt={2}>
          <InputGroup>
          <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="#1c4980e6" />}
          />
          <Input type="tel" placeholder="Search Opportunities" />
          </InputGroup>
        </Box> */}
        <Spacer />
        <Hide breakpoint="(max-width: 997px)" alignItems="center">
          <Box mt={2}>
            <Flex>
              <Link to="/learn">
                <Box className="single-menu-item">
                  {" "}
                  <em className="m_icons icon-learn"></em> Learn{" "}
                </Box>
              </Link>
              <Link to="/practice">
                <Box className="single-menu-item">
                  {" "}
                  <em className="m_icons icon-practice"></em> Practice{" "}
                </Box>
              </Link>
              <Link to="/compete">
                <Box className="single-menu-item">
                  {" "}
                  <em className="m_icons icon-compete"></em> Compete{" "}
                </Box>
              </Link>
              <Link to="/mentorship">
                <Box className="single-menu-item">
                  {" "}
                  <em className="m_icons icon-mentor"></em> Mentorship{" "}
                </Box>
              </Link>
              <Link to="/jobs">
                <Box className="single-menu-item">
                  {" "}
                  <em className="m_icons icon-jobs"></em> Jobs{" "}
                </Box>
              </Link>
            </Flex>
          </Box>
        </Hide>

        <Hide breakpoint="(min-width: 995px)">
          <Box
            mt={[2, 2, 2, 2]}
            className="mobile-nav"
            w={["100%", "100%", "100%"]}
          >
            <Flex justifyContent={["none", "space-between"]}>
              <Link to="/learn">
                <Box className="single-menu-item">
                  {" "}
                  <em className="m_icons icon-learn"></em> Learn{" "}
                </Box>
              </Link>
              <Link to="/practice">
                <Box className="single-menu-item">
                  {" "}
                  <em className="m_icons icon-practice"></em> Practice{" "}
                </Box>
              </Link>
              <Link to="/compete">
                <Box className="single-menu-item">
                  {" "}
                  <em className="m_icons icon-compete"></em> Compete{" "}
                </Box>
              </Link>
              <Link to="/mentorship">
                <Box className="single-menu-item">
                  {" "}
                  <em className="m_icons icon-mentor"></em> Mentorship{" "}
                </Box>
              </Link>
              <Link to="/jobs">
                <Box className="single-menu-item">
                  {" "}
                  <em className="m_icons icon-jobs"></em> Jobs{" "}
                </Box>
              </Link>
            </Flex>
          </Box>
        </Hide>

        <Box mt={"3"} display="flex">
          {loggedIn ? (
            <>
              <Box className="profilebtn" h="100%">
                <Button onClick={onOpen} variant="link" mb={4}>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </Button>
                <Drawer isOpen={isOpen} onClose={onClose}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Profile</DrawerHeader>
                    <hr />
                    <DrawerBody>
                      <Box
                        boxShadow="base"
                        h={"30%"}
                        border="2px solid red"
                      ></Box>
                      <Box>
                        <Text className="users">For Users</Text>
                        <HStack
                          className="users-type"
                          spacing={"13px"}
                          h={"40px"}
                        >
                          <Box>
                            <Icon as={IoBagHandleOutline} />
                          </Box>
                          <Box>For Employers</Box>
                        </HStack>
                        <HStack
                          className="users-type"
                          spacing={"13px"}
                          h={"40px"}
                        >
                          <Box>
                            <Icon as={IoBagHandleOutline} />
                          </Box>
                          <Box>For Employers</Box>
                        </HStack>
                        <HStack
                          className="users-type"
                          spacing={"13px"}
                          h={"40px"}
                        >
                          <Box>
                            <Icon as={IoBagHandleOutline} />
                          </Box>
                          <Box>For Employers</Box>
                        </HStack>
                        <HStack
                          className="users-type"
                          spacing={"13px"}
                          h={"40px"}
                        >
                          <Box>
                            <Icon as={IoBagHandleOutline} />
                          </Box>
                          <Box>For Employers</Box>
                        </HStack>
                        <HStack
                          className="users-type"
                          spacing={"13px"}
                          h={"40px"}
                        >
                          <Box>
                            <Icon as={IoBagHandleOutline} />
                          </Box>
                          <Box>For Employers</Box>
                        </HStack>
                        <HStack
                          className="users-type"
                          spacing={"13px"}
                          h={"40px"}
                        >
                          <Box>
                            <Icon as={IoBagHandleOutline} />
                          </Box>
                          <Box>For Employers</Box>
                        </HStack>
                        <HStack
                          className="users-type"
                          spacing={"13px"}
                          h={"40px"}
                        >
                          <Box>
                            <Icon as={IoBagHandleOutline} />
                          </Box>
                          <Box>For Employers</Box>
                        </HStack>
                        <HStack
                          className="users-type"
                          spacing={"13px"}
                          h={"40px"}
                        >
                          <Box>
                            <Icon as={IoBagHandleOutline} />
                          </Box>
                          <Box>For Employers</Box>
                        </HStack>
                      </Box>
                      <Box>
                        <Text className="users">For Organiser</Text>
                        <HStack
                          className="users-type"
                          spacing={"13px"}
                          h={"40px"}
                        >
                          <Box>
                            <Icon as={IoBagHandleOutline} />
                          </Box>
                          <Box>For Employers</Box>
                        </HStack>
                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                      <Button
                        className="logout"
                        type="submit"
                        w={"100%"}
                        variant="outline"
                        colorScheme={"#1c4980"}
                        onClick={handleLogout}
                      >
                        Logout
                      </Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </Box>
            </>
          ) : (
            <>
              <Link to="/login">
                <Box className="loginbtn">
                  Login
                  <Image
                    src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/login_icon.svg"
                    alt="login icon"
                  />
                </Box>
              </Link>
            </>
          )}
        </Box>

        <Box border={"1px solid"} h="10%" mt={[1, 1, 1, 3]}>
          <DrawerMenu h="100%" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
