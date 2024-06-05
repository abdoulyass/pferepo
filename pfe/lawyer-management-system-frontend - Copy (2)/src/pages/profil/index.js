import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css";
import use from "../../imgs/profile.png";
import tster from "../../imgs/tst.png";
import tste from "../../imgs/tst2.png";

const Profile = () => {
  const [showCV, setShowCV] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('userToken');
      if (!token) {
        throw new Error('Token not found');
      }
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      };

      const response = await axios.get('http://127.0.0.1:8000/api/user', config);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
      setError('Erreur lors de la récupération des informations utilisateur');
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleShowMore = () => setShowCV(true);
  const handleHideText = () => setShowCV(false);

  return (
    <div className="row gutters-sm profil">
      <img src={tster} className='backGround' alt="Background" />
      <img src={tste} className='backGround2' alt="Background 2" />
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img 
                src={use} 
                style={{ maxWidth: '150px', height: '150px' }} 
                className="rounded-circle" 
                alt="Photo de Profil"
              />
              <div className="mt-3">
                <h4>{user ? user.nom : ''}</h4>
                <p className="text-secondary mb-1"></p>
                <p className="text-muted font-size-sm">Maroc, Casablanca, Sbata</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Nom Complet</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {user ? `${user.nom} ${user.prenom}` : ''}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {user ? user.email : ''}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Téléphone</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                0611933848
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Adresse</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {user ? user.adresse: ''}
              </div>
            </div>
            <hr />
            <div className="row">
              <button
                type="button"
                className="btn btn-primary updateinfo"
              >

                modifier <i className="fa-solid fa-file-import"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row gutters-sm">
          <div className="col mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="d-flex align-items-center mb-3">
                  <i className="material-icons text-info mr-2">Informations Supplémentaires</i>
                </h6>
                <div>
                {user && user.etat === 0 && (
               <div>
                <p>Vous n'êtes pas encore confirmé. Cliquez <a href="preinscription">ici pour suivre votre confirmation.</a> </p>
              </div>
            )}
            {user && user.etat === 1 && (
              <div>
              <p>aucune informations Supplémentaires disponible</p>
              </div>
            )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
