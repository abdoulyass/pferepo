import React, { useState } from 'react';
import axios from 'axios';
import "./style.css";

const RequestClient = () => {
  const [formValues, setFormValues] = useState({
    description: '',
    dates: '',
    documents: [],
    selectedLawyer: '' // Nouvel état pour stocker l'avocat sélectionné
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const lawyers = [
    { id: 1, name: 'Avocat 1' },
    { id: 2, name: 'Avocat 2' },
    { id: 3, name: 'Avocat 3' }
    // Ajoutez autant d'objets d'avocat que nécessaire
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormValues({ ...formValues, documents: files });
  };

  const handleLawyerChange = (e) => {
    const selectedLawyer = e.target.value;
    setFormValues({ ...formValues, selectedLawyer });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
     
      const formData = new FormData();
      formData.append('description', formValues.description);
      formData.append('parts', formValues.parties);
      formData.append('selectedLawyer', formValues.selectedLawyer);
      formData.append('document', formValues.documents[0]); // Utilisez 'document' au lieu de 'documents'
  
      const response = await axios.post('http://127.0.0.1:8000/api/demanderAvocaat', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
  
      setFormValues({
        type: '',
        parties: '',
        description: '',
        documents: []
      });
  
      // Display success message and reset error message
      setSuccessMessage("Le problème a été soumis avec succès.");
      setErrorMessage("")
       
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
      setErrorMessage("Une erreur s'est produite lors de la soumission du formulaire. Veuillez réessayer plus tard.");
    }
  };

  return (
    <div className="containerR mt-4 card">
      <div className="text-center">
        <h2>Demande d'Avocat</h2>
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-groupR">
          <label>Description du Problème Juridique</label>
          <textarea
            className="form-controlR"
            name="description"
            value={formValues.description}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <div className="form-groupC">
          <label>parties</label>
          <input
            type="text"
            className="form-controlR"
            name="parties"
            value={formValues.parties}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupR">
          <label>Sélectionner un Avocat</label>
          <select
            className="form-controlR"
            name="selectedLawyer"
            value={formValues.selectedLawyer}
            onChange={handleLawyerChange}
            required
          >
            <option value="">Choisir un avocat</option>
            {lawyers.map(lawyer => (
              <option key={lawyer.id}  value={lawyer.id}>{lawyer.name}</option>
            ))}
          </select>
        </div>
        <div className="form-groupR">
          <label>Documents Pertinents</label>
          <input
            type="file"
            className="form-control-fileR"
            multiple
            onChange={handleFileChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primaryR">Soumettre</button>
      </form>
    </div>
  );
}

export default RequestClient;
