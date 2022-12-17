import CardHolder from './CardHolder';
function TeamMembersComponent({ filteredList, teamsList }) {
  return (
    <CardHolder filteredTeam={filteredList.length ? filteredList : teamsList} />
  );
}

export default TeamMembersComponent;
