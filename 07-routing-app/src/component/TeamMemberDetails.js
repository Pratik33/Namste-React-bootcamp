import React from 'react';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CardComponent from './CardComponent';

const TeamMemberDetails = () => {
  const { teamMemberId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const data = fetchUserDetails();
  }, []);
  const fetchUserDetails = async () => {
    const data = await fetch(`https://api.github.com/users/${teamMemberId}`);
    const jsonData = await data.json();
    setUser(jsonData);
  };
  return (
    <>
      <CardComponent user={user} />
    </>
  );
};

export default TeamMemberDetails;
