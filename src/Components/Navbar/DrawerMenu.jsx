import { DragHandleIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Icon,
  HStack,
  Box
} from '@chakra-ui/react'
import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import "./DrawerMenu.css"


function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} color='#1c4980' variant={'ghost'} onClick={onOpen}>
        <Icon as={RxHamburgerMenu}/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
      <hr />
          <DrawerBody>
            <Button variant={'solid'} w='100%' bg='#3e6493' color={'white'} >Host Events</Button>

            <HStack className='events-type' spacing={'13px'} h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>For Employers</Box>
            </HStack>

            <HStack className='events-type' spacing={'13px'}  h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>Our Solutions</Box>
            </HStack>
            <HStack className='events-type' spacing={'13px'}  h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>Our Products</Box>
            </HStack>
            <HStack className='events-type' spacing={'13px'}  h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>Pricing</Box>
            </HStack>
            <HStack className='events-type' spacing={'13px'}  h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>Contact Us</Box>
            </HStack>
            <HStack className='events-type' spacing={'13px'}  h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>Unstop Awards 2023</Box>
            </HStack>
            <HStack className='events-type' spacing={'13px'}  h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>Online Quzzing Festivals</Box>
            </HStack>
            <HStack className='events-type' spacing={'13px'} h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>Online Hackathon Festivals</Box>
            </HStack>
            <HStack className='events-type' spacing={'13px'} h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>About Us</Box>
            </HStack>
            <HStack className='events-type' spacing={'13px'} h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>Careers</Box>
            </HStack>
            <HStack className='events-type' spacing={'13px'} h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>FAQs</Box>
            </HStack>
            <HStack className='events-type' spacing={'13px'} h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>Terms & Conditions</Box>
            </HStack>
            <HStack className='events-type' spacing={'13px'} h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>Privacy Policy</Box>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
  }

  export default DrawerMenu;