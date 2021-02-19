import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

export default function PlayerCard() {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    loadAthlete();
  }, []);

  function loadAthlete() {
    axios.get('http://localhost:3001/api/mms')
      .then((res) => {
        console.log("response from db: ", res);
        setPlayer(res.data);
      })
      .catch((err) => console.log(err));
  }

  function viewProfile (players){
      if(players){
          return window.location.assign(players.link)
      }
  }

  function imageLink(players){
      if(players){
          return players.image
      } else {
          return 'no image'
      }
  }


  return (
    <div>
      {player.length ? (
        <div>
          {player.map((players) => (
              <div className="container">
            <div className="card text-black bg-dark mb-4" key={players._id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={imageLink(players)} alt={"Name of Player"}></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h1>{players.name}</h1>
                    <h2>{players.school}</h2>
                    <h2>{players.position}</h2>
                    <button
                      onClick={() => viewProfile(players)}
                      className="btn btn-dark mx-4"
                    >
                      View IG!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>Back to main Page</h1>
        </div>
      )}
    </div>
  );
}
