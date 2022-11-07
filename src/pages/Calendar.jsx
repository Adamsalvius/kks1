import dayjs from "dayjs";
import React, { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import {
  useDisclosure,
  Input,
  InputLeftAddon,
  InputGroup,
  Heading,
  Box,
  SimpleGrid,
  Text,
  Modal,
  ModalContent,
  Button,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

dayjs.extend(customParseFormat);
dayjs.extend(duration);

const Calendar = () => {
  const { times, tasks } = useProjects();

  const [inputValue, setInputValue] = useState(null);
  const handleInputDate = async (e) => {
    const date = dayjs(e.target.value).format("YYYY-MM-DD HH-mm");

    setInputValue(date);
  };


  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Heading display={"flex"} justifyContent={"center"}>
        Calendar
      </Heading>
     
        <Box
          display="flex"
          height="20px"
          gap="1em"
          padding="2em"
          justifyContent={"center"}
        >
          <Box display={"flex"} justifyContent={"center"}>
           {/*  <InputLeftAddon>day</InputLeftAddon> */}
            <input w={60} type="datetime-local" onChange={handleInputDate} />
          </Box>
        
        </Box>
    
      <Box display="flex" marginTop="2em" justifyContent={"center"} >
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          {tasks.map((task) => {
            const filterTimed = times.filter(
              (time) =>
                dayjs(time.timeStart).format("YYYY-MM-DD HH-mm") === inputValue
            );

          if(filterTimed.length === 0) return;
            return (
              <Box key={task.id}>
                <Heading>{task.name}</Heading>
                <Button onClick={onOpen}>Open Modal</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Times for {task.name}</ModalHeader>
                    <ModalHeader>Hours/Minutes/seconds</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      {filterTimed.map((time) => (
                        <Box key={time.id}>
                          <Text key={task.dayjs}>
                            {dayjs
                              .duration(time.Stopped - time.timerStart)
                              .format("HH:mm:ss")}
                          </Text>
                        </Box>
                      ))}
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Calendar;