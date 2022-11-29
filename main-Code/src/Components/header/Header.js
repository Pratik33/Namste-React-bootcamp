import React from 'react';
import './Header.css';

function Header({ navItems }) {
  let navItemList = navItems.map((navItem) => {
    return (
      <li className='nav-item mx-2'>
        <a
          className='nav-link'
          href='#'>
          {navItem.title}
        </a>
      </li>
    );
  });
  return (
    <nav className='navbar navbar-expand-lg navbar-light header-background header'>
      <a
        className='navbar-brand'
        href='#'>
        <strong>Pratik Mothe</strong>
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
        <ul className='navbar-nav ml-auto mr-4'>{navItemList}</ul>
      </div>
    </nav>
  );
}

export default Header;
