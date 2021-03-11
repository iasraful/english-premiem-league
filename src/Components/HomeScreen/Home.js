import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import CardDetails from "../CardDetails/CardDetails";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.teams.slice(0, 12));
      })
  }, []);

  console.log(teams); 

  return (
    <div>
      <div className="container">
        <div className="row">
          {teams.map((team) => (
            <div className="col-md-4 mb-3">
              <Card team={team} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
