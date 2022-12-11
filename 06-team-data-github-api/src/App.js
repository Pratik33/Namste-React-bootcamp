import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

import './index.css';
import Images from './assets/images.js';

import CardComponent from './component/CardComponent';
import NavbarComponent from './component/NavbarComponent';

const CardHolder = ({ filteredTeam }) => {
  return filteredTeam.map((user) => {
    return (
      <CardComponent
        user={user}
        key={user.id}
      />
    );
  });
};

const AppLayoutComponent = () => {
  const [filteredTeam, setFilteredTeam] = useState(data);
  return (
    <>
      <NavbarComponent
        data={data}
        setFilteredTeam={setFilteredTeam}
      />
      <div className='container'>
        <div className='row'>
          <CardHolder filteredTeam={filteredTeam} />
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayoutComponent />);
