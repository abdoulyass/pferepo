import React from 'react';
import './style.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function FormContact() {
  return (
    <div id='contact' className='contacts-wrapper'>
      <h1 className='h1-title'>Contactez-nous</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6"> 
            <form className="contact-form" style={{backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
              <div className="form-group" style={{ height: '100px' }}> 
                <label htmlFor="name">Nom :</label>
                <input type="text" className="form-control" id="name" name="name" />
              </div>
              <div className="form-group" style={{ height: '100px' }}>
                <label htmlFor="email">Email :</label>
                <input type="email" className="form-control" id="email" name="email" />
              </div>
              <div className="form-group" style={{ height: '200px' }}> 
                <label htmlFor="message">Message :</label>
                <textarea className="form-control" id="message" name="message" rows="3" />
              </div>
              <button type="submit" className=" btn-primary" style={{ marginTop: '10px' }}>Envoyer</button> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormContact;