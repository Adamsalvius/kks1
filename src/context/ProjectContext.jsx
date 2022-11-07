import { createContext, useContext, useState, useEffect } from "react";
import * as api from "../api";

export const ProjectContex = createContext();

export const ProjectProvider = ({ children }) => {

	const [projects, setProjects] = useState([]);
	const [tasks, setTasks] = useState([]);
	const [times, setTimes] = useState([]);




	const deleteProject = async (id) => {
		if (!id) return;
		const deleted = await api.deleteProject(id);
		if (!deleted) return;
		console.log(deleted);
		setProjects((currentData) => currentData.filter((data) => data.id !== id));
		setTasks((currentData) =>
			currentData.filter((data) => data.projectId !== id)
		);
	};

	const deleteTask = async (id) => {
		if (!id) return;
		const deleted = await api.deleteTask(id);
		setTasks((currentData) => currentData.filter((data) => data.id !== id));
		setTimes((currentData) => currentData.filter((data) => data.taskId !== id));
	};
	const deleteTime = async (id) => {
		if (!id) return;
		const deleted = await api.deleteTime(id);
		setTimes((currentData) => currentData.filter((data) => data.id !== id));
	};




	const getTime = async () => {
		const data = await api.getTimed();
		setTimes(data);
	};
	const getTask = async () => {
		const data = await api.getTasks();
		
		setTasks(data);
	};

	const getProject = async () => {
		const data = await api.getProjects();

		setProjects(data);
	};






	const addTime = async (timeData) => {
		const data = await api.addTime(timeData);
		setTimes((times) => [...times, data]);
	};
	const addTask = async (taskData) => {
		const data = await api.addTask(taskData);
		setTasks((tasks) => [...tasks, data]);
	};	

	const addProject = async (projectData) => {
		const data = await api.addProject(projectData);
		setProjects((projects) => [...projects, data]);

	};




	

	const updateTime = async (id, timeData) => {
		const data = await api.updateTime(id, timeData);
		setTimes((times) => times.map((time) => (time.id !== id ? time : data)));
	};

	useEffect(() => {
	
		getProject();
		getTask();
		getTime();
	}, []);

	return (
		<ProjectContex.Provider
			value={{
				
				deleteProject,
				tasks,
				getTask,
				addTask,
				deleteTask,
				projects,
				getProject,
				addProject,
				times,
				getTime,
				addTime,
				deleteTime,
				updateTime,
			}}
		>
			{children}
		</ProjectContex.Provider>
	);
};

export const useProjects = () => {
	const Con =  useContext(ProjectContex);
	
	return Con;
};