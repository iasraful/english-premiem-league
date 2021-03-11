import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

 import { useParams } from 'react-router';

const CardDetails = () => {
    const [details, setDetails] = useState([])
    const { idTeam } = useParams();
    
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.teams[0]) )
        
    }, [])
     
    const {strTeamLogo , strStadiumThumb, intFormedYear, strCountry, strSport, strGender ,strTeam}= details

    return (
        <div className="container">
            <div className="row bgBanner" style={{backgroundImage : `url(${strStadiumThumb})`}}>
                <div className="col-12">
                    <img className="teamLogo" src={strTeamLogo} alt="log"/>
                </div>
            </div>
            <div className="row bg-primary my-3 py-5">
                <div className="col-md-5">
                    <h2>League : {strTeam} </h2>
                    <p><strong>Founded : </strong> {intFormedYear} </p>
                    <p><strong>Country : </strong> {strCountry} </p>
                    <p><strong>Sport : </strong> {strSport} </p>
                    <p><strong>Gender : </strong> {strGender} </p>
                </div>
            </div>
        </div>  
    );
};

export default CardDetails;