import CardHolder from './CardHolder';
import SearchComponent from './SearchComponent';

import { useState, useEffect } from 'react';

import gitUserNames from '../util/Constant';
import { Outlet } from 'react-router-dom';

function TeamMembersComponent() {
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
      <SearchComponent
        data={teamsList}
        setFilteredList={setFilteredList}
        setIsMemberPresent={setIsMemberPresent}
      />
      {isMemberPresent ? (
        <CardHolder
          filteredTeam={filteredList.length ? filteredList : teamsList}
        />
      ) : (
        <h1>Not result found for this search !</h1>
      )}
    </>
  );
}

export default TeamMembersComponent;
