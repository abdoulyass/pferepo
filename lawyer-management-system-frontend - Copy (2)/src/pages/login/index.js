import React, { useState, useEffect } from "react";
import './style.css';
import { loginimg } from "../../assets/images";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import axios from 'axios';

function Sect1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: email,
        password: password,
      });
      const token = response.data.token;
      localStorage.setItem('userToken', token);
      navigate('/clients');
    } catch (error) {
      console.error('Erreur lors de la connexion : ', error);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Une erreur s'est produite lors de la connexion. Veuillez réessayer.");
      }
    }
  };

  return (
    <div className="login-form">
      <h1>Bienvenue !</h1>
      <div className="container">
        <div className="main">
          <div className="content">
            <h2>Connexion</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="custom-input"
                />
                <Form.Control.Feedback type="invalid">
                  Veuillez fournir une adresse e-mail valide.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="custom-input"
                />
                <Form.Control.Feedback type="invalid">
                  Veuillez fournir un mot de passe.
                </Form.Control.Feedback>
              </Form.Group>
              <Button className="btn" type="submit">
                Connecter
              </Button>
            </Form>
            <p className="account">
              Vous n'avez pas de compte ? <Link to="/inscription">Inscrivez-vous</Link>
            </p>
          </div>
          <div className="form-img">
            <img src={loginimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Sect1Wrapper() {
  const [verificationComplete, setVerificationComplete] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    console.log(userToken);
    if (userToken) {
      navigate(location.state?.from || '/clients');
    }
    setVerificationComplete(true);
  }, [navigate, location.state]);

  if (!verificationComplete) {
    return (
      <div className="loading-spinner">
        <Spinner animation="border" role="status">
          <span className="sr-only">Chargement...</span>
        </Spinner>
      </div>
    );
  }

  return <Sect1 />;
}

export default Sect1Wrapper;
