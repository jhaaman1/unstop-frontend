import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Spacer } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import "./Navbar.css";
import DrawerMenu from "./DrawerMenu";
import { Link } from "react-router-dom";
import NotificationDrawer from "./NotificationDrawer";

const Navbar = () => {
  return (
    <Box className="nav" >
      <Flex gap={4}>
        <Box className="logo" mt={2}>
          <Flex>
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
          </Flex>
        </Box>
        <Box mt={2}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="#1c4980e6" />}
            />
            <Input type="tel" placeholder="Search Opportunities" />
          </InputGroup>
        </Box>
        <Spacer/>
        <Box mt={2}>
          <Flex>
            <Box className="single-menu-item"> <em className="m_icons icon-learn"></em> Learn </Box>
            <Box className="single-menu-item"> <em className="m_icons icon-practice"></em> Practice </Box>
            <Box className="single-menu-item"> <em className="m_icons icon-compete"></em> Compete </Box>
            <Box className="single-menu-item"> <em className="m_icons icon-mentor"></em> Mentorship </Box>
            <Box className="single-menu-item"> <em className="m_icons icon-jobs"></em> Jobs </Box>
          </Flex>
        </Box>

        <Box mt={'3'} display='flex'>
          <Box display={'flex'} gap={'2'} className='host'>
            <Image src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/host-icon.svg" alt="host icon" w='15px' h='15px'/>
            Host
          </Box>
          <Link to='/login'>
          <Box className="loginbtn">
            Login
            <Image src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/login_icon.svg" alt="login icon" />
          </Box>
          </Link>
          <Box>
            <DrawerMenu/>
            {/* <NotificationDrawer/> */}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
