import React, { useState } from "react";
import profil from "../../../imgs/profile.png";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu, MenuItem, IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TableCli = () => {
  const [clients, setClients] = useState([
    { id: 1, nom: 'John Doe', email: 'john.doe@example.com', telephone: '1234567890', cases: ['Case 1', 'Case 2'] },
    { id: 2, nom: 'Jane Smith', email: 'jane.smith@example.com', telephone: '2345678901', cases: ['Case 3'] },
    { id: 3, nom: 'John Doe', email: 'john.doe@example.com', telephone: '1234567890', cases: ['Case 1', 'Case 2'] },
    { id: 4, nom: 'John Doe', email: 'john.doe@example.com', telephone: '1234567890', cases: ['Case 1', 'Case 2'] },
    { id: 5, nom: 'John Doe', email: 'john.doe@example.com', telephone: '1234567890', cases: ['Case 1', 'Case 2'] },
    { id: 6, nom: 'John Doe', email: 'john.doe@example.com', telephone: '1234567890', cases: ['Case 1', 'Case 2'] },
    
    
  ]);

  const [selectedClient, setSelectedClient] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedClientId, setSelectedClientId] = useState(null);

  const handleMenuClick = (event, clientId) => {
    setAnchorEl(event.currentTarget);
    setSelectedClientId(clientId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedClientId(null);
  };

  const viewClientDetails = (clientId) => {
    const client = clients.find((client) => client.id === clientId);
    setSelectedClient(client);
    handleMenuClose();
  };

  const deleteClient = (clientId) => {
    const updatedClients = clients.filter((client) => client.id !== clientId);
    setClients(updatedClients);
    setSelectedClient(null);
    handleMenuClose();
  };

  const filteredClients = clients.filter(client =>
    client.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container clients mt-3">
      {/* Barre de recherche */}
      <div className="row mb-3">
        <div className="col-md-12" style={{ display: "flex", gap: "19%"}}>
          <h2>Clients</h2>
          <input
            type="text"
            className="form-control shearch"
            placeholder="Rechercher un client..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="row">
        {filteredClients.length === 0 ? (
          <div className="col-md-12 notfound">
            <p>Aucun client ne correspond à la recherche.</p>
          </div>
        ) : (
          filteredClients.map((client) => (
            <div className="col-md-4 mb-3" key={client.id}>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="prfl">
                      <img src={profil} className="prflimg" alt="Profile"/>
                    </div>
                    <IconButton
                      edge="end"
                      color="inherit"
                      aria-label="menu"
                      onClick={(e) => handleMenuClick(e, client.id)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl) && selectedClientId === client.id}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={() => viewClientDetails(client.id)}>Voir les détails</MenuItem>
                      <MenuItem onClick={() => deleteClient(client.id)}>Supprimer</MenuItem>
                    </Menu>
                  </div>
                  <h5 className="card-title mt-2">{client.nom}</h5>
                  <p className="card-text">Email:<br/> {client.email}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedClient && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Détails du client</h5>
                <button type="button" className="close" onClick={() => setSelectedClient(null)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p><strong>Nom:</strong> {selectedClient.nom}</p>
                <p><strong>Email:</strong> {selectedClient.email}</p>
                <p><strong>Téléphone:</strong> {selectedClient.telephone}</p>
                <p><strong>Cas associés:</strong> {selectedClient.cases.join(", ")}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={() => setSelectedClient(null)}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableCli;
