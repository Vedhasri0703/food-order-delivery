import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav className="nav-bar">
    <NavLink to="/orders">Orders</NavLink>
    <NavLink to="/filter">Filter</NavLink>
    <NavLink to="/stats">Stats</NavLink>
  </nav>
);
export default NavBar;