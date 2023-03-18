import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Icon,
  useDisclosure,
  Button,
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
import { AiOutlineUser } from "react-icons/ai";
import NotificationDrawer from "./NotificationDrawer";

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
    <Box className="nav">
      <Flex gap={4}>
        <Box className="logo" mt={2}>
          {/* <Flex>
            <Image
              className="imagelogo"
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
              alt=""
              w={"82px"}
              h={"32px"}
            />
            <span className="logo-text">
              Formerly <strong>Dare2Compete</strong>
            </span>
          </Flex> */}
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

        <Box mt={"3"} display="flex">
          {loggedIn ? (
            <>
              <Box className="profilebtn">
                <Button onClick={onOpen}>Open</Button>
                <Drawer isOpen={isOpen} onClose={onClose}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Profile</DrawerHeader>
                    <hr />
                    <DrawerBody>
                      <form
                        id="my-form"
                        onSubmit={(e) => {
                          e.preventDefault();
                          console.log("submitted");
                        }}
                      >
                        <Input name="nickname" placeholder="Type here..." />
                      </form>
                    </DrawerBody>

                    <DrawerFooter>
                      <Button type="submit" onClick={handleLogout}>
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

        <Box>
          <DrawerMenu />
          {/* <NotificationDrawer/> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
