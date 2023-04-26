import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/dashboard">Home</Link>
              <Link className="nav-link" to="/apartment">Apartment</Link>
              <Link className="nav-link" to="/admin">Admin</Link>
              <div className='logout d-flex'>
                <Link className='nav-link' to="/logout">Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>



      {/* <Link to="/">Login</Link>
      <Link to="/dashboard">Home</Link>
      <Link to="/apartment">Apartment</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/register">Registration</Link> */}
    </div>
  )
}