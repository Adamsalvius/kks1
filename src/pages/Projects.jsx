import { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";

import {
 
  Box,
  Input,
  Container,
  Button,
  SimpleGrid,
  Text,
  Heading,
  
} from "@chakra-ui/react";

const Projects = () => {
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState("");
  const { projects, addProject, deleteProject } = useProjects();
 

  const handleClickAdd = async () => {
  
    const projectData = {
      id: uuid(),
      name: input,
    };
    await addProject(projectData);

    setInput("");
  };

  const Deletehandler = async (id) => {
    await deleteProject(id);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return isActive === true ? (
    <Container backgroundColor="gray.300" marginTop={20} p={20}>
      <Heading>Project Creation</Heading>
      <Box>
        <Button marginTop={2} onClick={() => setIsActive(false)}>
          Back
        </Button>
        <Input
          placeholder="project name"
          marginTop={20}
          type="text"
          value={input}
          onChange={handleInput}
        />

        <Button marginTop={2} onClick={() => handleClickAdd()}>
          Add
        </Button>
      </Box>
    </Container>
  ) : (
    <Container>
      <Box display={"flex"} marginTop={20} justifyContent={"center"}>
        <Button
          backgroundColor={"green"}
          margin={5}
          onClick={() => setIsActive(true)}
        >
          Add a project
        </Button>
      </Box>

      <Heading marginBottom={"10vh"} display={"flex"} justifyContent={"center"}>
        Projects
      </Heading>

      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        {projects &&
          projects.map((project) => (
            <Box
              /*  justifyContent={"center"} */ borderColor={"gray.200"}
              display={"flex"}
              /* justifyContent={"center"}  */ key={project.id}
            >
              <Text key={project.name}>{project.name}</Text>
              <Button minW={"8em"} onClick={() => Deletehandler(project.id)}>
                delete
              </Button>
            </Box>
          ))}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;