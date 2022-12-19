import { Link } from 'react-router-dom';
import SearchComponent from './SearchComponent';
const NavbarComponent = ({ data, setFilteredList, setIsMemberPresent }) => {
  return (
    <nav className='navbar navbar-light '>
      <Link
        to={`team-members`}
        className='navbar-brand'>
        Web Pirates
      </Link>
    </nav>
  );
};
export default NavbarComponent;
