import CardComponent from './CardComponent';

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

export default CardHolder;
