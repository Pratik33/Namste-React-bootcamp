import { Link } from 'react-router-dom';
import CardComponent from './CardComponent';

const CardHolder = ({ filteredTeam }) => {
  if (filteredTeam.length > 0) {
    return filteredTeam.map((user) => {
      if (user.login) {
        return (
          <Link to={`${user.login}`}>
            <CardComponent
              user={user}
              key={user.id}
            />
          </Link>
        );
      }
    });
  }
};

export default CardHolder;
