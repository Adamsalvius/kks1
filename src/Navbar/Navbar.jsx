import { NavLink } from "react-router-dom";
import { List, ListItem } from "@chakra-ui/react";

const Navbar = () => {
  const active = {
    color: "white",
    backgroundColor: "blue",
    padding: "0.5em",
  };
  let inActive = {
    color: "black",
    margin: 0,
    padding: "0.5em",
  };

  return (
    <List
      list-style="none"
      display=" flex"
      justifyContent="center"
      position="fixed"
      width=" 100vw"
      maxWidth=" 100vw"
      bottom="0"
      left="0"
      padding="0"
      gap=" 10em"
      margin=" 0"
      backgroundColor="blue.400"
    >
      <ListItem style={{ display: "flex" }}>
        <NavLink
          to={"overview"}
          style={({ isActive }) => (isActive ? active : inActive)}
        >
          Overview
        </NavLink>
      </ListItem>
      <li style={{ display: "flex" }}>
        <NavLink
          to={"timer"}
          style={({ isActive }) => (isActive ? active : inActive)}
        >
          Timer
        </NavLink>
      </li>
      <li style={{ display: "flex" }}>
        <NavLink
          to={"calendar"}
          style={({ isActive }) => (isActive ? active : inActive)}
        >
          Calendar
        </NavLink>
      </li>
    </List>
  
  );
};

export default Navbar;