import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CircularProgress, Typography } from '@mui/material';
import "./style.css";
import { format } from 'date-fns';
import tst from "../../imgs/profile.png";
import tster from "../../imgs/tst.png";
import tste from "../../imgs/tst2.png";

const Problems = () => {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [successOpen, setSuccessOpen] = useState(false);
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/problmes');
        setProblems(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response ? err.response.data.message : 'Erreur de connexion');
        setLoading(false);
      }
    };

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
        setCurrentUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
        setError('Erreur lors de la récupération des informations utilisateur');
      }
    };

    fetchUser();
    fetchProblems();
  }, []);

  const handleClickOpen = (job) => {
    setSelectedJob(job);
   
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedJob(null);
  };

  const handleConfirm = async () => {
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
  
      const userId = currentUser.id;

      const response = await axios.put(`http://127.0.0.1:8000/api/problemes/${selectedJob.id}/demandertravail`, { userId }, config);
      
      console.log(response.data.message); 
      
      handleClose();
      setSuccessOpen(true);
    } catch (error) {
      console.error('Error sending work request:', error);
      
    }
  };
  

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };

  if (loading) {
    return (
      <div className="AppReq">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="AppReq">
        <Typography variant="h6" color="error">{error}</Typography>
      </div>
    );
  }

  return (
    <div className="AppReq">
      <div className="AppGlassReq">
        <img src={tster} className='backGround' alt="background" />
        <img src={tste} className='backGround2' alt="background2" />
        <div className="middleContainerReq problems">
          {problems.map((job, index) => (
            <div className="item" key={index}>
              <div className="box card">
                <div className="client_id">
                  <div className={`img-box`}>
                    <img src={tst} />
                  </div>
                  <div className="client_detail d-flex" style={{ position: "relative" }}>
                    <input type="hidden" name="offre" value="" />
                    <div className="client_info" style={{ marginTop: "7px" }}>
                      <h6 className="poste" style={{ fontWeight: "600" }}>tst</h6>
                      <div className="date" style={{ marginTop: "5px", width: "136px" }}> {format(new Date(job.created_at), 'dd-MM-yyyy HH:mm')}</div>
                    </div>
                    <button
                      type="button"
                      className="btn demander_travail"
                      onClick={() => handleClickOpen(job)}
                    >
                      
                    {requestSent ? 'Demande envoyée' : 'Envoyer une demande'}<i className="fa-solid fa-file-import"></i>
                    </button>
                  </div>
                </div>
                <div className="info d-flex" style={{ margin: "9px 0px 3px 1px" }}>
                  <i className="fa fa-binoculars" aria-hidden="true"></i>
                  <span style={{ color: "#5b5b5b", marginTop: "5px" }}>famille</span>
                </div>
                <div className="client_text">
                  <ul style={{ display: "block" }}>
                    <li>partie: <a href="/">{job.parts}</a></li>
                    <li>
                      Address: <a href="/offres.html?workExperienceId%5B0%5D=5"></a>
                    </li>
                    <li>
                      Document required: 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Êtes-vous sûr de vouloir envoyer une demande pour ce problème?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={successOpen}
        onClose={handleSuccessClose}
        aria-labelledby="success-dialog-title"
        aria-describedby="success-dialog-description"
      >
        <DialogTitle id="success-dialog-title">{"Succès"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="success-dialog-description">
            Demande envoyée avec succès!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Problems;
