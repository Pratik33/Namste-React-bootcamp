import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-light">
      <Link to={`team-members`} className="navbar-brand">
        Web Pirates
      </Link>
    </nav>
  );
};
export default NavbarComponent;
