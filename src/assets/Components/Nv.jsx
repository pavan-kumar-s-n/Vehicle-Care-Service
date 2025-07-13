import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home' 

export default function Nv() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary"data-bs-theme="dark" >
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">Dr.Vehicle</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
            </li>
          </ul>
      </div>
      </div>
    </nav>
    <br></br>
    </>
  )
}
