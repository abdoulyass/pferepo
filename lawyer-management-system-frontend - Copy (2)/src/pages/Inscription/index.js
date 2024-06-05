import React, { useState, useEffect } from "react";
import "./style.css";
import { inscrpimg } from "../../assets/images";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import axios from 'axios'; 

function SignupForm({ history }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      navigate(location.state?.from || '/clients');
    }
  }, [navigate, location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!nom || !prenom || !email || !password || !passwordConfirmation) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Veuillez fournir une adresse e-mail valide.");
      return;
    }

    if (password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }

    if (password !== passwordConfirmation) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        nom: nom,
        prenom: prenom,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      });
      const token = response.data.token;

      localStorage.setItem('userToken', token);
  
      console.log('User token:', token);
      console.log(response.data);
      navigate('/clients');
  
    } catch (error) {
      console.error('Erreur lors de l\'inscription : ', error);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Une erreur s'est produite lors de l'inscription. Veuillez réessayer.");
      }
      setNom("");
      setPrenom("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
    }
  };

  return (
    <div className="signup-form">
      <h1>Inscrivez-vous maintenant!</h1>
      <div className="container">
        <div className="main">
          <div className="content">
            <h2>Inscription</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="firstName">
                <Form.Control
                  type="text"
                  placeholder="Prénom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Control
                  type="text"
                  placeholder="Nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Control
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="passwordConfirmation">
                <Form.Control
                  type="password"
                  placeholder="Confirmer le mot de passe"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Inscrire
              </Button>
            </Form>
            <p className="account">
              Déjà inscrit ? <Link to="/login">Connexion</Link>
            </p>
          </div>
          <div className="form-img">
            <img src={inscrpimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
