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
  Input,
  Flex,
  Avatar,
  Badge,
  Text,
  Box,
  Center,
} from "@chakra-ui/react";
import "./App.css";
import React from "react";
import AddMachine from "./components/AddMachine";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Center bg="tomato" h="100px" color="white">
        <Flex>
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQE7vaIDRgtC3A/profile-displayphoto-shrink_800_800/0/1551641344331?e=1651104000&v=beta&t=XUUgiSHzH3dvEjXUmF4NiwqvAjpUQo34vL-QdJKaVgo" />
          <Box ml="3">
            <Text fontWeight="bold">
              Betul Kaplan
              <Badge ml="1" colorScheme="green">
                New
              </Badge>
            </Text>
            <Text fontSize="sm">Software Engineer</Text>
          </Box>
        </Flex>
      </Center>

      <AddMachine />

      {/* <Center h="100px" color="white">
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open
        </Button>
      </Center>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer> */}
    </>
  );
}

export default App;
