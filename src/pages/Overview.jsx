import Tasks from "./Tasks";
import Projects from "./Projects";
import { useState } from "react";
import {Button,  Box} from "@chakra-ui/react"
const Overview = () => {
	
	const [tasksOpen, setTasksOpen] = useState(false);

	const [projectsOpen, setProjectsOpen] = useState(false);





	
	const TaskClick = () => {
		setProjectsOpen(false);
		setTasksOpen(true);
	};
	const ProjectClick = () => {
		setProjectsOpen(true);
		setTasksOpen(false);
	};

	return (
		<Box display="grid" id="yusuf">
			
			<Box display="flex" justifyContent={"space-around"} pos="sticky"> 
				
			
				{tasksOpen ? (
					<Button backgroundColor={"green"} minW={"50vw"} onClick={TaskClick}>Tasks</Button>
				) : (
					<Button minW={"50vw"} onClick={TaskClick}>Tasks</Button>
				)}
					{projectsOpen ? (
					<Button backgroundColor={"green"} minW={"50vw"} onClick={ProjectClick}>
						Projects
					</Button>
				) : (
					<Button  minW={"50vw"} onClick={ProjectClick}>Projects</Button>
				)}
			</Box>
			
			{projectsOpen && <Projects />} 
 	{tasksOpen && <Tasks />} 
		</Box>
	);
};

export default Overview;