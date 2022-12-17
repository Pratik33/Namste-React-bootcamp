import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';

import NavbarComponent from './component/NavbarComponent';
import AboutUsComponent from './component/AboutUsComponent';
import TeamMembersComponent from './component/TeamMembersComponent';

import gitUserNames from './util/Constant';

const AppLayoutComponent = () => {
  const [teamsList, setTeamsList] = useState([]);

  const [filteredList, setFilteredList] = useState([]);

  const [isMemberPresent, setIsMemberPresent] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await Promise.all(
      gitUserNames.map(async (gitUserName) => {
        const userData = await fetch(
          `https://api.github.com/users/${gitUserName}`
        );
        return await userData.json();
      })
    );
    setTeamsList(data);
  }
  return (
    <>
      <NavbarComponent
        data={teamsList}
        setFilteredList={setFilteredList}
        setIsMemberPresent={setIsMemberPresent}
      />
      <div className='container'>
        <div className='row'>
          {isMemberPresent ? (
            <TeamMembersComponent
              filteredList={filteredList}
              teamsList={teamsList}
            />
          ) : (
            <h1>No result for this Search !</h1>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayoutComponent />,
    children: [
      {
        path: '/about',
        element: <AboutUsComponent />,
      },
      {
        path: '/home',
        element: <TeamMembersComponent />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
