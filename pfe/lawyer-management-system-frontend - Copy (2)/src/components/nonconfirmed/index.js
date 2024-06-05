import React from "react";
import tster from "../../imgs/tst.png";
import tste from "../../imgs/tst2.png";
import { FaExclamationCircle } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';

function Nonconfirmed() {
  return (
  
        <Card className="text-center">
          <Card.Header>
            <FaExclamationCircle size={24} style={{ color: 'red', marginRight: '10px' }} />
            message
          </Card.Header>
          <Card.Body>
            <Card.Title>  vous n'est pas encore confirmé.</Card.Title>
            <Card.Text>
          Veuillez attendre la confirmation de notre staff.
            </Card.Text>
          </Card.Body>
        </Card>

  );
}

export default Nonconfirmed;
