import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

import './index.css';

import NavbarComponent from './component/NavbarComponent';
import CardHolder from './component/CardHolder';

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
            <CardHolder
              filteredTeam={filteredList.length ? filteredList : teamsList}
            />
          ) : (
            <h1>No result for this Search !</h1>
          )}
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayoutComponent />);
