import React from 'react'
import "./style.css"

export default function index() {
    return (
        <div className="card text-white bg-dark mb-4" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src="" alt=""></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">Name</h1>
              <h2 className="card-title">School</h2>
              <h2 className="card-title">Year</h2>
              <h2 className="card-title">Position</h2>
              <a href="#" className="btn btn-dark">View IG</a>
            </div>
          </div>
        </div>
      </div>
    )
}
