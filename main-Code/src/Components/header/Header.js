import React from 'react';

function Header({ navItems }) {
  let navItemList = navItems.map((navItem) => {
    return (
      <li className='nav-item active'>
        <a
          className='nav-link'
          href='#'>
          {navItem.title}
        </a>
      </li>
    );
  });
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a
        className='navbar-brand'
        href='#'>
        Pratik Mothe
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span class='navbar-toggler-icon'></span>
      </button>
      <div
        className='collapse navbar-collapse'
        id='navbarNav'>
        <ul className='navbar-nav'>{navItemList}</ul>
      </div>
    </nav>
  );
}

export default Header;
