import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const handleToggle = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand me-auto logo-container">
            <img src="./logo.png" width={50} alt="Logo" />
            <div className="logo-text">
              <h2>Lawyers</h2>
              <p>Services legales</p>
            </div>
          </Link> 

          <div className={`offcanvas offcanvas-end ${isOffcanvasOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
            <Link to="/" className="navbar-brand me-auto logo-container">
            <img src="./logo.png" width={30} alt="Logo" />
            
          </Link> 
              <button type="button" className="btn-close" onClick={handleToggle} aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item nav1">
                  <a href="/#acceuil" className="nav-link mx-lg-2 ">Acceuil</a> 
                </li>
                <li className="nav-item nav1">
                  <a href="/#services" className="nav-link mx-lg-2">Services</a> 
                </li>
                <li className="nav-item nav1">
                  <a href="/#apropos" className="nav-link mx-lg-2">à propos</a> 
                </li>
                <li className="nav-item nav1">
                  <a href="/#contact" className="nav-link mx-lg-2">Contactez nous</a> 
                </li>
                <li className="nav-item nav1">
                  <a href="/#prqnous" className="nav-link mx-lg-2">Pourquoi nous</a> 
                </li>
              </ul>
              <ul className="nav2 navbar-nav justify-content-end flex-grow-2 pe-3 align-items-center">
                <li className="nav-item">
                  <Link to="/login" className="button1">Login</Link> 
                </li>
                <li className="nav-item">
                  <Link to="/inscription" className="button1">Inscription</Link> 
                </li>
              </ul>
            </div>
          </div>
          
          <button className="navbar-toggler " type="button" onClick={handleToggle} aria-expanded={isOffcanvasOpen}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
