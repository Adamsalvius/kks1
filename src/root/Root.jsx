import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

/* 
 const Fix = `
	padding: 0;
	margin: 0;
 	height: 100vh;
	width: 100vw; 
	max-width: 100vw;
`;    */

function Root ()  {
	
	return (
		<>
			  <div padding="0" margin="0" height="100vh" width="100vw" max-width="100vw">   
				<Outlet  />
		 	 </div>  
			<Navbar  />
		</>
	);
}

export default Root;
