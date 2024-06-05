import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material'; // Import CircularProgress from @mui/material
import { Sidebar, MainDash, RightSide, TableComm, TableCli } from '../../components';
import Nonconfirmed from '../../components/nonconfirmed'; // Import the Nonconfirmed component
import "./style.css";
import tster from "../../imgs/tst.png";
import tste from "../../imgs/tst2.png";

export default function Clients() {
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
    <div className="AppClient">
      <div>
        <img src={tster} className="backGround" alt="background" />
        <img src={tste} className="backGround2" alt="background2" />
        {/* <Sidebar /> */}
        <div className="middleContainerClient">
          <TableCli />
        </div>
      </div>
    </div>
  );
}
