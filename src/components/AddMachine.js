import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";

const AddMachine = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Center>
      <Center h="100px" color="white">
        <Button colorScheme="teal" onClick={onOpen}>
          Add Machine
        </Button>
      </Center>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Machine</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Machine name</FormLabel>
              <Input id="name" placeholder="Machine name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="ip-add">IP Address</FormLabel>
              <Flex>
                <Input id="ip-add" placeholder="IP Address" />
                <Button ml={2} colorScheme="teal">
                  Generate
                </Button>
              </Flex>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="ip-add">Data (in JSON format)</FormLabel>
              <Input placeholder="Basic usage" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost">Cancel</Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default AddMachine;
