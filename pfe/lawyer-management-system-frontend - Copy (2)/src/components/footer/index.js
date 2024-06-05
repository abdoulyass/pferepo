import React from 'react'
import './style.css'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">&copy; {currentYear} - Tous droits réservés. </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;