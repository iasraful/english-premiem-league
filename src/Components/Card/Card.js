import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { strTeam, strSport, idTeam , strTeamLogo} = props.team;
  const leagueLogo = {
    height: "200px",
    width: "200px",
    borderRadius: "10px",
    margin: "30px auto"
  }
  return (
    <div className="card text-center">
      <img className="card-img-top" style={leagueLogo} src={strTeamLogo} alt="Card"/>
      <div className="card-body">
        <h5 className="card-title">{strTeam}</h5>
        <p className="card-text">{strSport}</p>
        <Link to={`/CardDetails/${idTeam}`} className="btn btn-primary"> Explore </Link>
      </div>
    </div>
  );
};

export default Card;
