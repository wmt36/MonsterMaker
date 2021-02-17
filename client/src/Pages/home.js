import React from "react";
import Jumbotron from "../components/Jumbotron";
import "./style.css";


export default function home() {
  return (
    <div>
      <Jumbotron />
      <div className="text-center">
        <a className="bttn btn-black btn-lg" href="/athletes" role="button">
          MM
        </a> 
          
      </div>
    
    </div>
  );
}
