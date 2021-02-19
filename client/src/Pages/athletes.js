import React from 'react'
import './style.css'
import PlayerCard from './../components/PlayerCard'


export default function athlete() {
    return (
        <div>
            <div>
      <div className="jumbotron">
        <h1 className="display-4">Monsters Made!</h1>
        <h2 className="lead">
          Over the years I have had the pleasure of developing hundreds of athletes, below are just a few of my many...
        </h2>
        <hr></hr>
      </div>
      <div className="text-center">
      <br></br>
          <PlayerCard />
          <br></br>
        <a className="bttn btn-black btn-lg" href="/" role="button">
          MM
        </a> 
        <br></br>
        
      </div>
    </div>
        </div>
    )
}
