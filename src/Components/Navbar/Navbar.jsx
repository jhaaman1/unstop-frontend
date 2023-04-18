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
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
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
      w={["100%", "100%", "100%", "100%"]}
      h={["100%", "100%", "100%", "30%"]}
    >
      <Flex
        gap={4}
        justifyContent={["space-between", "space-between", "none", "none"]}
      >
        <Box mt={2} w={'35%'}>
          <InputGroup>
          <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="white" />}
          />
          <Input type="tel" placeholder="Search 9000+ tutorials" />
          </InputGroup>
        </Box>
        <Box m='auto' ml='8'>
          <Image src="data:image/jpeg;base64,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" alt="" h={'40%'} w={'60%'}  />
        </Box>
        <Spacer />
        <HStack>
          <Button color='white' variant='outline'>Menu</Button>
          <Button colorScheme="yellow" color='white' variant='solid'>Sign In</Button>
        </HStack>


        {/* <Box mt={"3"} display="flex">
          {loggedIn ? (
            <>
              <Box className="profilebtn" h="100%">
                <Button onClick={onOpen} variant="link" mb={4}>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </Button>
               
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
        </Box> */}

        {/* <Box border={"1px solid"} h="10%" mt={[1, 1, 1, 3]}>
          <DrawerMenu h="100%" />
        </Box> */}
      </Flex>
    </Box>
  );
};

export default Navbar;
