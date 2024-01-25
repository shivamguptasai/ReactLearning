import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';




function Navbar() {
  return (
    <>
    <div className="container-fluid ">
        <div className='row'>
            <div className='col-md-12 mx-auto'>
            <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg " data-bs-theme="dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="./">Hi! Recruiters</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className='ml-auto'>
    <div className="collapse navbar-collapse ml" id="navbarNavAltMarkup">
      <div className="navbar-nav" >
        <NavLink className="nav-link " to="./">Home</NavLink>
        <NavLink className="nav-link" to="./feature">Features</NavLink>
        <NavLink className="nav-link" to="./about">About Us</NavLink>
        <NavLink className="nav-link" to="./contact">Contact Us</NavLink>
        </div>
      </div>
    </div>
  </div>
</nav>
            </div>
        </div>
    </div>
   

</>
  );
}

export default Navbar;