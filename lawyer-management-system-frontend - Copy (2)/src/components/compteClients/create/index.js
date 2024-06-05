import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const CaseCreateClient = () => {
  const [formValues, setFormValues] = useState({
    type: '',
    parties: '',
    description: '', // Correction : 'description' au lieu de 'dates'
    documents: [],
    selectedLawyer: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false); // État pour afficher le modal de succès

  const lawyers = [
    { id: 1, name: 'Avocat 1', acceptsOrders: true },
    { id: 2, name: 'Avocat 2', acceptsOrders: false },
    { id: 3, name: 'Avocat 3', acceptsOrders: true }
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
      formData.append('type', formValues.type);
      formData.append('parties', formValues.parties);
      formData.append('description', formValues.description);
      formData.append('document', formValues.documents[0]);
  
      const response = await axios.post('http://127.0.0.1:8000/api/postNewprblm', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      setFormValues({
        type: '',
        parties: '',
        description: '',
        documents: null
      });

      // Afficher le modal de succès
      setShowSuccessModal(true);
      setSuccessMessage("Le problème a été soumis avec succès.");
      setErrorMessage("");
  
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
      setErrorMessage("Une erreur s'est produite lors de la soumission du formulaire. Veuillez réessayer plus tard.");
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };
  
  return (
    <div className="containerC mt-4">
      <div className="text-center ">
        <h2>Créer un Nouveau Cas Juridique</h2>
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {/* Modal de succès */}
      {showSuccessModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseSuccessModal}>&times;</span>
            <p>{successMessage}</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-groupC">
          <label>Type de Cas</label>
          <input
            type="text"
            className="form-controlC"
            name="type"
            value={formValues.type}
            onChange={handleChange}
          />
        </div>

        <div className="form-groupC">
          <label>Parties Impliquées</label>
          <input
            type="text"
            className="form-controlC"
            name="parties"
            value={formValues.parties}
            onChange={handleChange}
          />
        </div>

        <div className="form-groupC">
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
          <label>Documents Pertinents</label>
          <input
            type="file"
            className="form-control-fileC"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" style={{width: '38%',marginLeft: '30%', borderRadius: '8px'}}className="btn btn-primaryC">
          Créer Cas
        </button>
      </form>
    </div>
  );
}

export default CaseCreateClient;
