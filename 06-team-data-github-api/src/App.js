import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

import './index.css';

import CardComponent from './component/CardComponent';
import NavbarComponent from './component/NavbarComponent';
import gitUserNames from './util/Constant';

const CardHolder = ({ filteredTeam }) => {
  if (filteredTeam.length > 0) {
    return filteredTeam.map((user) => {
      if (user.login) {
        return (
          <CardComponent
            user={user}
            key={user.id}
          />
        );
      }
    });
  }
};

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
            <CardHolder
              filteredTeam={
                filteredList.length === 0 ? teamsList : filteredList
              }
            />
          ) : (
            <h1>Opps ! Something goes wrong</h1>
          )}
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayoutComponent />);
