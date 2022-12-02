import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import logo from './assets/logo.png';
// creating the react element by using React.createElement()
const heading = React.createElement('div', { id: 'title' }, [
  React.createElement('h1', { id: 'heading' }, 'React Bootcamp'),
  React.createElement('h2', { id: 'heading-subtitle' }, 'Pratk Mothe'),
]);

// creating heading using JSX
const assignmentNumber = 3;
const headingJSX = (
  <div className='title'>
    {' '}
    <h1>React Bootcamp - JSX</h1>
    <h2>By Pratik Mothe</h2>
    <h4>Assignment number - {assignmentNumber}</h4>
  </div>
);

// Functional components
// A javascript function returning a valid JSX / react element is call component.
// mostly use arrow functions (Industry standards)

const TitleComponent = () => (
  <h1>React BootCamp - Assignment 3 - functional component</h1>
);

// we can nest, two functional components
const months = 3;
const HeadingComponent = () => {
  return (
    <div className='title'>
      <TitleComponent />
      <h3>Master React</h3>
      <h4>in {months} months</h4>
    </div>
  );
};

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

const AppLayoutComponent = () => {
  return (
    <>
      <NavbarComponent />
      <div className='container'>
        <HeadingComponent />
      </div>
    </>
  );
};

//const App = () => <h1>Hello World !</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayoutComponent />);
