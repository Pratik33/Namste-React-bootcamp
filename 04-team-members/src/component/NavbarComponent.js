const NavbarComponent = () => {
  return (
    <nav className='navbar navbar-light '>
      <a
        className='navbar-brand'
        href='#'>
        Web Pirates
      </a>
      <div>
        <input
          type='text'
          placeholder='searchbar'
        />
        <button className='btn btn-success'>Search</button>
      </div>
    </nav>
  );
};
export default NavbarComponent;
