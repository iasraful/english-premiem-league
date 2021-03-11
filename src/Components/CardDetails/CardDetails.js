import React, { useEffect, useState } from "react";
import MainNavBar from "../MainNavBar/MainNavBar";

import { useParams } from "react-router";

const CardDetails = () => {
  const [details, setDetails] = useState([]);
  const { idTeam } = useParams();

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data.teams[0]));
  }, [idTeam]);

  const {
    strTeamLogo,
    strStadiumThumb,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strTeam,
  } = details;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <MainNavBar />
        </div>
      </div>
      <div
        className="row bgBanner"
        style={{ backgroundImage: `url(${strStadiumThumb})` }}
      >
        <div className="col-12">
          <img className="teamLogo" src={strTeamLogo} alt="log" />
        </div>
      </div>
      <div className="row bg-primary my-3 py-5">
        <div className="col-md-5">
          <h2>League : {strTeam} </h2>
          <p>
            <strong>Founded : </strong> {intFormedYear}{" "}
          </p>
          <p>
            <strong>Country : </strong> {strCountry}{" "}
          </p>
          <p>
            <strong>Sport : </strong> {strSport}{" "}
          </p>
          <p>
            <strong>Gender : </strong> {strGender}{" "}
          </p>
        </div>
        <div className="col-md-7">
          <img
            className="img-fluid"
            src={
              strGender === "Male"
                ? "https://www.dreamteamfc.com/c/wp-content/uploads/sites/4/2017/06/qatar-football.jpg?strip=all&w=750&quality=100"
                : "https://www.thesun.co.uk/wp-content/uploads/2017/08/nintchdbpict000343303326.jpg"
            }
            alt="team banner"
          />
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
