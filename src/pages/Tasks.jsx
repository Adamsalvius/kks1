import { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";

import{ Select, Box, Input, Container, Button, SimpleGrid, Text, Heading} from "@chakra-ui/react"

const Tasks = () => {
	const [currentProject, setCurrentProject] = useState(null);
	const [input, setInput] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const { projects, tasks, addTask, deleteTask } = useProjects();

	const handleClickAdd = async () => {
		 if (!input.trim()) return;
		if (!currentProject) return setInput(""); 
		const taskData = {
			id: uuid(),
			projectId: currentProject,
			name: input,
		};
		await addTask(taskData);
		setInput("");
		setIsOpen(false);
	};

	const handleClickDelete = async (id) => {
		if (!id) return;
		await deleteTask(id);
	};

	const handleOption = (e) => {
		setCurrentProject(e.target.value);
	};

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	return isOpen === true ? (
		<Container backgroundColor="gray.300">
			<Box margin={20} display={"flex"} justifyContent={"center"} >
				
				<Select color="white"  width={"20vw"}  border="20px" backgroundColor={"blue"} onChange={handleOption} >
					<option value="">Pick a Project</option>
					 {projects.map((project) => (
								<option
									key={project.id}
									value={project.id}
									
								>
									{project.name}
								</option>
						  ))}
						
				</Select>
				
			</Box>
			<Box>
				<Input placeholder="Taskname" type="text"  w={"20vw"} value={input} onChange={handleInput} />
				<Button onClick={() => handleClickAdd()}>Add</Button>
			</Box>
		</Container>
	) : (
		<>
			<Box margin={20}>
				<Box display={"flex"} justifyContent={"center"} >
					<Button backgroundColor={"green"} onClick={() => setIsOpen(true)}>Add a Task</Button>
				</Box>
			</Box>
			<Box>
				<Heading marginBottom={"10vh"} display={"flex"} justifyContent={"center"}>Tasks</Heading>
				<SimpleGrid  columns={[2, null, 3]} spacing='40px' >
			
					{tasks.map((task) => {
						return (
						
							<Box display={"flex"} justifyContent={"center"} key={task.id} >
								<Text margin={2}>{task.name}</Text>
								<Button
							
									onClick={() => handleClickDelete(task.id)}
								>delete</Button>
							
							</Box>
							
						);
					})}
					</SimpleGrid>
	
			</Box>
		</>
	);
};

export default Tasks;