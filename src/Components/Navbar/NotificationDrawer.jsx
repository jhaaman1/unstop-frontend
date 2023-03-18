import { BellIcon, DragHandleIcon, HamburgerIcon } from "@chakra-ui/icons";
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
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

function NotificationDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} color="#1c4980" variant={"ghost"} onClick={onOpen}>
        {/* <BellIcon w='30px' h='30px'/> */}
        <Icon as={BsFillPersonFill} w="30px" h="30px" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <hr />
          <DrawerBody>
            
          </DrawerBody>
        </DrawerContent>

        <hr />
        <DrawerFooter>
            <Button type='submit' form='my-form'>
              Save
            </Button>
          </DrawerFooter>
      </Drawer>
    </>
  );
}

export default NotificationDrawer;
