import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProjectProvider } from "./context/ProjectContext";
import Calendar from "./pages/Calendar";
import Overview from "./pages/Overview";
import Timers from "./pages/Timers";
import Root from "./root/Root";



import "./App.css";

const browsRouter = createBrowserRouter([
	{
		
		
		element: <Root />,
		children: [
			{
				element: <Overview />,
				index: true
			},
			{
				path: "overview",
				element: <Overview />,
			},
			{
				path: "calendar",
				element: <Calendar />,
			},

			{
				path: "timer",
				element: <Timers />,
			},
		],
	},
]);

function App() {
	return (
		<>
			
			<ProjectProvider>
				<RouterProvider router={browsRouter} />
			</ProjectProvider>
	
		</>
	);
}

export default App;