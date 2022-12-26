import ReactDOM from 'react-dom/client';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  index,
} from 'react-router-dom';
import './index.css';

import NavbarComponent from './component/NavbarComponent';
import AboutUsComponent from './component/AboutUsComponent';
import TeamMembersComponent from './component/TeamMembersComponent';
import TeamMemberDetails from './component/TeamMemberDetails';
import ErrorElement from './component/ErrorElement';

const AppLayoutComponent = () => {
  return (
    <>
      <NavbarComponent />
      <div className='container'>
        <div className='row'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayoutComponent />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/about',
        element: <AboutUsComponent />,
      },
      {
        path: '/team-members',
        element: <TeamMembersComponent />,
      },
      {
        path: '/team-members/:teamMemberId',
        element: <TeamMemberDetails />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
