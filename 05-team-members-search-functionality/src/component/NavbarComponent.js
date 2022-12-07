import SearchComponent from './SearchComponent';
const NavbarComponent = ({ data, setFilteredTeam }) => {
  return (
    <nav className='navbar navbar-light '>
      <a
        className='navbar-brand'
        href='#'>
        Web Pirates
      </a>
      <SearchComponent
        data={data}
        setFilteredTeam={setFilteredTeam}
      />
    </nav>
  );
};
export default NavbarComponent;
