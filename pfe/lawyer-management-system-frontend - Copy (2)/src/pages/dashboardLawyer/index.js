import React, { useState, useEffect } from 'react';
import { Sidebar, MainDash, RightSide } from '../../components';
import Nonconfirmed from '../../components/nonconfirmed/';
import tster from "../../imgs/tst.png";
import tste from "../../imgs/tst2.png";
import CircularProgress from '@mui/material/CircularProgress';
import "./style.css";

export default function Dash() {
  const [userState, setUserState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('userToken'); // Retrieve the token from localStorage
        if (!token) {
          throw new Error('No auth token found');
        }

        const response = await fetch('http://127.0.0.1:8000/api/user', {
          headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const userData = await response.json();
        setUserState(userData.etat); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="spinner-container" >
        <CircularProgress />
      </div>
    );
  }

  if (userState === 0) {
    return (
      <div className="Appnonconf">
        <img src={tster} className='backGround' alt="background" />
        <img src={tste} className='backGround2' alt="background2" />  
        <div className="App">
          <Nonconfirmed />
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <img src={tster} className='backGround' alt="background" />
      <img src={tste} className='backGround2' alt="background2" />  
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}
