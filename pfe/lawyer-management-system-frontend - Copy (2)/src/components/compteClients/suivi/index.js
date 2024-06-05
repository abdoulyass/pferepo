import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import './style.css';

const SuiviClient = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentCase, setCurrentCase] = useState(null);
  const [newProchainesEtapes, setNewProchainesEtapes] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [newNotes, setNewNotes] = useState('');
  const [newPriority, setNewPriority] = useState('Normal');
  const [newAssignee, setNewAssignee] = useState('');
  const navigate = useNavigate();

  const handleMenuOpen = (event, cas) => {
    setAnchorEl(event.currentTarget);
    setCurrentCase(cas);
    setNewProchainesEtapes(cas.prochainesEtapes);
    setNewStatus(cas.statut);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setShowModal(true);
    handleMenuClose();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentCase(null);
  };

  const handleSaveChanges = () => {
    // Update the case's prochainesEtapes, statut, notes, priority, and assignee with the new values
    const updatedCase = { 
      ...currentCase, 
      prochainesEtapes: newProchainesEtapes, 
      statut: newStatus, 
      notes: newNotes, 
      priority: newPriority, 
      assignee: newAssignee 
    };
    // Here you would normally make an API call to update the case on the server
    console.log('Updated Case:', updatedCase);
    handleCloseModal();
  };

  const handleChangeProchainesEtapes = (event) => {
    setNewProchainesEtapes(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setNewStatus(event.target.value);
  };

  const handleChangeNotes = (event) => {
    setNewNotes(event.target.value);
  };

  const handleChangePriority = (event) => {
    setNewPriority(event.target.value);
  };

  const handleChangeAssignee = (event) => {
    setNewAssignee(event.target.value);
  };

  // Dummy data for cases with additional details
  const cases = [
    {
      id: 1,
      type: 'Divorce',
      statut: 'En cours',
      prochainesEtapes: 'Audience de conciliation le 15 avril 2024',
      datesImportantes: 'Audience de conciliation: 15/04/2024, Audience de jugement: 30/06/2024',
      avocat: 'Maître Dupont',
      description: 'Dossier de divorce compliqué avec des questions de garde et de biens.'
    },
    {
      id: 2,
      type: 'Litige Commercial',
      statut: 'En attente',
      prochainesEtapes: 'Analyse de la preuve',
      datesImportantes: 'Rapport d\'expertise: 10/05/2024',
      avocat: 'Maître Martin',
      description: 'Conflit entre deux entreprises concernant un contrat de service.'
    },
    // Add more dummy cases as needed
  ];

  return (
    <div className="containerS mt-4">
      <h2 className="mb-4">Suivi de Cas</h2>
      <div className="list-groupS">
        {cases.map((cas) => (
          <div key={cas.id} className="list-group-itemS">
            <div className="case-header">
              <h5 className="mb-1">{cas.type}</h5>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={(event) => handleMenuOpen(event, cas)}
              >
                <MoreVertIcon />
              </IconButton>
            </div>
            <hr />
            <p className="mb-1"><strong>Statut:</strong> {cas.statut}</p>
            <p className="mb-1"><strong>Prochaines Étapes:</strong> {cas.prochainesEtapes}</p>
            <p className="mb-1"><strong>Dates Importantes:</strong> {cas.datesImportantes}</p>
            <p className="mb-1"><strong>Avocat:</strong> {cas.avocat}</p>
            <p className="mb-1"><strong>Description:</strong> {cas.description}</p>
            {/* Add other relevant case details as needed */}
          </div>
        ))}
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleOpenModal}>Modifier le cas</MenuItem>
        {/* Add other menu options here */}
      </Menu>

      <Modal
  show={showModal}
  onHide={handleCloseModal}
  centered
>
  <Modal.Header closeButton>
    <Modal.Title>Modifier les information de cas </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Typography variant="h6" component="h2">
      Prochaines Étapes
    </Typography>
    <textarea
      className="form-control"
      rows={2}
      value={newProchainesEtapes}
      onChange={handleChangeProchainesEtapes}
      placeholder="Entrez les nouvelles étapes"
    />
    <Form.Group className="mt-3">
      <Form.Label>Statut</Form.Label>
      <Form.Control
        as="select"
        value={newStatus}
        onChange={handleChangeStatus}
      >
        <option value="En attente">En attente</option>
        <option value="En cours">En cours</option>
        <option value="Terminé">Terminé</option>
      </Form.Control>
    </Form.Group>
    <Form.Group className="mt-3">
      <Form.Label>Priorité</Form.Label>
      <Form.Control
        as="select"
        value={newPriority}
        onChange={handleChangePriority}
      >
        <option value="Faible">Faible</option>
        <option value="Normal">Normal</option>
        <option value="Élevée">Élevée</option>
      </Form.Control>
    </Form.Group>
   
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseModal}>
      Fermer
    </Button>
    <Button variant="primary" onClick={handleSaveChanges}>
      Enregistrer les Modifications
    </Button>
  </Modal.Footer>
</Modal>
    </div>
  );
}

export default SuiviClient;
