import { BellIcon, DragHandleIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Stack,
  Radio,
  Button,
  Input,
} from '@chakra-ui/react'
import React from 'react';


function NotificationDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} color='#1c4980' variant={'ghost'} onClick={onOpen}>
        <BellIcon w='30px' h='30px'/>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
  }

  export default NotificationDrawer;