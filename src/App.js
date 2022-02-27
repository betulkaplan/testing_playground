import { Flex, Avatar, Badge, Text, Box, Center } from "@chakra-ui/react";
import "./App.css";
import { useEffect, useState } from "react";
import AddMachine from "./components/AddMachine";
import MachineCard from "./components/MachineCard";
const server = process.env.REACT_APP_HOST_DOMAIN;

function App() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    fetch(`${server}/api/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMachines(data);
      });
  }, []);

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
      {machines.map((machine) => {
        return <MachineCard machine={machine} />;
      })}
    </>
  );
}

export default App;
