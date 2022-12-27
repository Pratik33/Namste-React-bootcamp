import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";

const CardHolder = ({ filteredTeam }) => {
  if (filteredTeam.length > 0) {
    return filteredTeam.map((user) => {
      if (user.login) {
        return (
          <div>
            <h2>Hello 1</h2>
            <Link key={user.login} to={`${user.login}`}>
              <CardComponent user={user} key={user.id} />
            </Link>
          </div>
        );
      }
    });
  }
};

export default CardHolder;
