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
              <Box>Learn</Box>
            </HStack>

            <HStack className='events-type' spacing={'13px'}  h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>Practice</Box>
            </HStack>
            <HStack className='events-type' spacing={'13px'}  h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>Compete</Box>
            </HStack>
            <HStack className='events-type' spacing={'13px'}  h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>Mentorship</Box>
            </HStack>
            <HStack className='events-type' spacing={'13px'}  h={'8%'}>
              <Box >
                <Icon as={IoBagHandleOutline} />
              </Box>
              <Box>Jobs</Box>
            </HStack>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
  }

  export default DrawerMenu;