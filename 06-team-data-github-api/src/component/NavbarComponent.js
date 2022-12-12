import SearchComponent from './SearchComponent';
const NavbarComponent = ({ data, setFilteredList, setIsMemberPresent }) => {
  return (
    <nav className='navbar navbar-light '>
      <a
        className='navbar-brand'
        href='#'>
        Web Pirates
      </a>
      <SearchComponent
        data={data}
        setFilteredList={setFilteredList}
        setIsMemberPresent={setIsMemberPresent}
      />
    </nav>
  );
};
export default NavbarComponent;
