import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { TableComm } from '../../components';
import Nonconfirmed from '../../components/nonconfirmed';
import tster from "../../imgs/tst.png";
import tste from "../../imgs/tst2.png";
import "./style.css";

const Orders = () => {
  const [userState, setUserState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('userToken'); 
       
        if (!token) {
          throw new Error('No auth token found');
        }

        const response = await fetch('http://127.0.0.1:8000/api/user', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true,
        });

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('Unauthorized: Invalid token or session expired');
          }
          throw new Error('Network response was not ok');
        }

        const userData = await response.json();
        setUserState(userData.etat);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle specific error cases
        if (error.message === 'Unauthorized: Invalid token or session expired') {
          // Redirect to login or display an appropriate message
          console.error('Redirect to login or show an appropriate message');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <CircularProgress />
      </div>
    );
  }

  if (userState === 0) {
    return (
      <div className="Appnonconf">
        <img src={tster} className="backGround" alt="background" />
        <img src={tste} className="backGround2" alt="background2" />
        <div className="App">
          <Nonconfirmed />
        </div>
      </div>
    );
  }

  return (
    <div className="AppComm">
      <div className="AppGlassComm">
        <img src={tster} className="backGround" alt="background" />
        <img src={tste} className="backGround2" alt="background2" />
        {/* <Sidebar /> */}
        <div className="middleContainerComm">
          <TableComm className="clientsTab" />
        </div>
      </div>
    </div>
  );
};

export default Orders;
