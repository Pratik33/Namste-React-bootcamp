import React from "react";

const CardComponent = ({ user }) => {
  const {
    id,
    avatar_url,
    name,
    company,
    html_url,
    followers,
    following,
    login,
  } = user;
  return (
    <div className="row">
      <div className="col-md-4 mt-2">
        <div className="card">
          <img
            className="card-img-top img-fluid rounded-circle p-2"
            src={avatar_url}
            alt="Card image cap"
            style={{ height: "18rem" }}
          />
          <div className="card-body text-center">
            <h4 className="card-text">{name || login}</h4>
            <h6>
              Followers :{followers} | Following : {following}
            </h6>
            <p>
              <small>{company || "Student"}</small>
            </p>
          </div>
          <div className="cardFooter text-center row m-0 p-0">
            <div className="col-4 m-auto">
              <a target="blank" href={html_url}>
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="col-4 m-auto">
              <a target="blank" href={html_url}>
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="col-4 m-auto">
              <a target="blank" href={html_url}>
                <i className="fa-brands fa-linkedin "></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
