import React , {useState} from 'react'
import "./style.css"
const NotifClient = () => {
    const client = "Daniel"
    const [notifications, setNotifications] = useState([
        { id: 1, message: "Votre commande a été acceptée.", lawyer: "Alice" },
        { id: 2, message: "Votre commande est en attente.", lawyer: "Bob" },
        { id: 3, message: "Votre commande a été refusée.", lawyer: "Charlie" },
      ]);
    
      return (
        <div className="notifications-container">
          <h3 className="notifications-title">Notifications pour {client}</h3>
          <ul className="list-group">
            {notifications.map((notification) => (
              <li key={notification.id} className="list-group-item">
                <span className="lawyer-name">Avocat {notification.lawyer}:</span>
                <span className="notification-message">{notification.message}</span>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default NotifClient
