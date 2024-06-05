import React, { useState, useEffect } from 'react';
import './style.css';
import Pusher from 'pusher-js';
import axios from 'axios';
import tst from '../../../imgs/profile.png';
import CircularProgress from '@mui/material/CircularProgress';

const Updates = () => {
  const [notifications, setNotifications] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        });
        setUserId(response.data.id);
      } catch (err) {
        setError('Error fetching user ID');
        console.error('Error fetching user ID:', err);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    if (!userId) return;

    const pusher = new Pusher('f5505c9cf1e9af7a869f', {
      cluster: 'eu',
      encrypted: true,
    });

    const notfname = `notifications.${userId}`;
    const channel = pusher.subscribe(notfname);
    channel.bind('App\\Events\\NotificationEvent', function (data) {
      console.log('New Notification:', data);
      setNotifications((prevNotifications) => [...prevNotifications, data]);

      if (Notification.permission === 'granted') {
        new Notification('Nouvelle notification', {
          body: data.message,
        });
      }
    });

    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification('Notifications enabled');
        }
      });
    }

    return () => {
      pusher.unsubscribe(notfname);
      pusher.disconnect();
    };
  }, [userId]); 

  useEffect(() => {
    if (!userId) return;

    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/usernotifcation/${userId}`);
        setNotifications(response.data.data);
        console.log('Fetched notifications:', response.data.data);
      } catch (err) {
        setError('Error fetching notifications');
        console.error('Error fetching notifications:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [userId]);

  if (loading) {
    return (
      <div className="spinner-containernotif">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div className="error-container">{error}</div>;
  }

  return (
    <div className="Updates">
      {notifications.map((notification, index) => (
        <div className="update" key={index}>
          <img src={tst} alt="profile" />
          <div className="noti">
            <div style={{ marginBottom: '0.5rem' }}>
              <span>{notification.message}</span>
            </div>
            <span>{new Date(notification.timestamp).toLocaleTimeString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Updates;
