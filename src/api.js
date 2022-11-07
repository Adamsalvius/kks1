import axios from "axios";


const SERV = "http://localhost:3000";

/* get */

export const getProjects = async () => {
	const { data } = await axios.request({
		method: "get",
		url: `${SERV}/projects`,
	});
	
	return data;
};

export const getTimed = async () => {
	const { data } = await axios.request({
		method: "get",
		url: `${SERV}/log`,
	});
	
	return data;
};


export const getTasks = async () => {
	const { data } = await axios.request({
		method: "get",
		url: `${SERV}/tasks`,
	});
	
	return data;
};







/* patch */

export const updateTime = async (id, timeData) => {
	const response = await axios.request({
		method: "patch",
		url: `${SERV}/log/${id}`,
		data: timeData,
	});
	
	return response.data;
};

/* post */

export const addTask = async (taskData) => {
	const response = await axios.request({
		method: "post",
		url: `${SERV}/tasks`,
		data: taskData,
	});

	return response.data;
};
export const addTime = async (timeData) => {
	/* const response =  */await axios.request({
		method: "post",
		url: `${SERV}/log`,
		data: timeData
	});
	return timeData
	/* return response.data; */
};

export const addProject = async (projectData) => {
	 const response =  await axios.request({
		method:"post",
		url:`${SERV}/projects`,
		data: projectData,
	});
	
	return response.data;
};



/* del */





export const deleteTime = async (id) => {
	const response = await axios.request({
		method: "delete",
		url: `${SERV}/log/${id}`,
	});

	return response.status === 200;
};
export const deleteTask = async (id) => {
	const response = await axios.request({
		method: "delete",
		url: `${SERV}/tasks/${id}`,
	});
	
	return response.status === 200;
};

export const deleteProject = async (id) => {
	const response = await axios.request({
		method: "delete",
		url: `${SERV}/projects/${id}`,
	});
	console.log(response);
	return response.status === 200;
};

