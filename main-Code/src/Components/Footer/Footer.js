import React from 'react';

function Footer() {
  return (
    <footer className='bg-red'>
      <div className='col-md-12'>
        <p>Social media presense</p>
        <ul className='list-inline'>
          <li className='list-inline-item'>
            <a
              class='link link-active'
              target='_blank'
              href='https://www.linkedin.com/in/pratik-mothe-40a418106/'>
              <i class='fa-brands fa-linkedin'></i>
            </a>
          </li>
          <li className='list-inline-item'>
            {' '}
            <a
              class='link link-active'
              target='_blank'
              href='https://twitter.com/mothe_pratik'>
              <i class='fa-brands fa-twitter'></i>
            </a>
          </li>
          <li className='list-inline-item'>
            {' '}
            <a
              class='link link-active'
              target='_blank'
              href='https://github.com/Pratik33'>
              <i class='fa-brands fa-github'></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
