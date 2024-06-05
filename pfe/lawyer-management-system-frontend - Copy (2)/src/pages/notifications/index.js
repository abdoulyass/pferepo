import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import axios from 'axios';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const pusher = new Pusher('f5505c9cf1e9af7a869f', {
      cluster: 'eu',
      encrypted: true,
    });
    
    const channel = pusher.subscribe('notifications');
    channel.bind('App\\Events\\NotificationEvent', function(data) {
      console.log('New Notification:', data);
      setNotifications(prevNotifications => [...prevNotifications, data]);

      // Afficher une notification HTML5
      if (Notification.permission === 'granted') {
        new Notification('Nouvelle notification', {
          body: data.message,
        });
      }
    });

    // Demander la permission pour afficher les notifications HTML5
    Notification.requestPermission();
  
    return () => {
      pusher.unsubscribe('notifications');
      pusher.disconnect();
    };
  }, []);



  return (
    <div className="App">
      <h1>Real-time Notifications with Pusher</h1>
  
      <h2>Notifications reçues :</h2>
      <ul>
  {notifications.map((notification, index) => (
    <li key={index}>{notification.notification}</li>
  ))}
</ul>
    </div>
  );
}

export default Notifications;
