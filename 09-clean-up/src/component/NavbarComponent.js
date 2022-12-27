import { Link, NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-light">
      <Link to={`/`} className="navbar-brand">
        Web Pirates
      </Link>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/team-members"}>Team Members</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavbarComponent;
