import React from 'react'
import PropTypes from 'prop-types'
// import {a } from "react-router-dom";



export default function Navbar(props) {
  return (
    <>
       <nav className = {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand"  href="/">{props.title}</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <a  className="nav-a" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-a"  href= "#about">{props.aboutText}</a>
        </li>
        
      </ul>
      
      <div className={`form-check form-switch  text-${props.mode==='light'?'dark':'light'} mx-4`}>
      
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
</div>
       <form className="d-flex text-light">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> 
    </div>
  </div>
</nav>

    </>
  )
}

Navbar.propTypes={
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'TextUtilsMJ...',
    aboutText:'About'
}