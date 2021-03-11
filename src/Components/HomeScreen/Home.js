import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import MainNavBar from "../MainNavBar/MainNavBar";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.teams.slice(0, 12));
      });
  }, [teams]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <MainNavBar />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              style={{
                backgroundImage:
                  "url(https://www.snyder-associates.com/wp-content/uploads/2018/09/McFarland_Football_299_ameessmann-1-of-1-1024x600.jpg)",
                height: "300px",
                width: "100%",
              }}
            >
              <h1 className="text-center py-5 text-white">Football Mania</h1>
            </div>
          </div>
        </div>
        <div className="row my-3">
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
