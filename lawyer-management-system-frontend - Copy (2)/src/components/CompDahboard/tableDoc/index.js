import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import du fichier CSS Bootstrap
import "./style.css"; // Import du fichier CSS personnalisé

const TableDoc = () => {
  // État local pour stocker les cas
  const [cases, setCases] = useState([
    { 
      id: 1, 
      type: 'Divorce', 
      parties: 'Alice et Bob Smith', 
      etat: 'En attente', 
      document: 'document1.pdf', 
      details: 'Procédure de divorce à l\'amiable entre Alice et Bob Smith.', 
      prix: 1500,
      datesImportantes: 'Rapport d\'expertise: 10/05/2024',
      prochainesEtapes: 'Analyse de la preuve',
      clientId: 1 // ID du client associé au cas
    },
    // Ajoutez d'autres cas ici
    { 
      id: 2, 
      type: 'Litige Commercial', 
      parties: 'ABC Corporation vs XYZ Entreprises', 
      etat: 'En attente', 
      document: 'document2.pdf', 
      details: 'Contentieux commercial entre ABC Corporation et XYZ Entreprises.', 
      prix: 2000,
      datesImportantes: 'Audience préliminaire: 15/05/2024',
      prochainesEtapes: 'Dépôt des plaidoiries',
      clientId: 2
    },
    { 
      id: 3, 
      type: 'Succession', 
      parties: 'Famille Johnson', 
      etat: 'En attente', 
      document: 'document3.pdf', 
      details: 'Règlement de la succession de feu M. Johnson au sein de sa famille.', 
      prix: 3000,
      datesImportantes: 'Réunion de médiation: 20/05/2024',
      prochainesEtapes: 'Évaluation des biens',
      clientId: 3
    },
    { 
      id: 4, 
      type: 'Droit du Travail', 
      parties: 'Employé Z vs Entreprise W', 
      etat: 'En attente', 
      document: 'document4.pdf', 
      details: 'Contentieux en droit du travail entre l\'employé Z et l\'entreprise W.', 
      prix: 2500,
      datesImportantes: 'Entretien de conciliation: 25/05/2024',
      prochainesEtapes: 'Négociation des conditions de départ',
      clientId: 4
    },
    { 
      id: 5, 
      type: 'Litige Foncier', 
      parties: 'M. et Mme Davis vs M. Johnson', 
      etat: 'En attente', 
      document: 'document5.pdf', 
      details: 'Litige foncier entre M. et Mme Davis et M. Johnson concernant une propriété.', 
      prix: 3500,
      datesImportantes: 'Expertise du terrain: 30/05/2024',
      prochainesEtapes: 'Étude des titres de propriété',
      clientId: 5
    },
    { 
      id: 6, 
      type: 'Responsabilité Civile', 
      parties: 'Victime Y vs Compagnie d\'Assurance Z', 
      etat: 'En attente', 
      document: 'document6.pdf', 
      details: 'Cas de responsabilité civile impliquant la victime Y et la compagnie d\'assurance Z.', 
      prix: 2800,
      datesImportantes: 'Audition des témoins: 05/06/2024',
      prochainesEtapes: 'Préparation des arguments',
      clientId: 6
    },
    { 
      id: 7, 
      type: 'Droit des Sociétés', 
      parties: 'Société Alpha vs Société Beta', 
      etat: 'En attente', 
      document: 'document7.pdf', 
      details: 'Contentieux en droit des sociétés entre la Société Alpha et la Société Beta.', 
      prix: 3200,
      datesImportantes: 'Assemblée générale extraordinaire: 10/06/2024',
      prochainesEtapes: 'Examen des documents comptables',
      clientId: 7
    },
    // Ajoutez d'autres cas ici
    { 
      id: 8, 
      type: 'Contentieux de la Propriété Intellectuelle', 
      parties: 'Entreprise A vs Entreprise B', 
      etat: 'En attente', 
      document: 'document8.pdf', 
      details: 'Contentieux de la propriété intellectuelle entre l\'entreprise A et l\'entreprise B.', 
      prix: 4000,
      datesImportantes: 'Dépôt des mémoires: 15/06/2024',
      prochainesEtapes: 'Analyse des preuves techniques',
      clientId: 8
    },  { 
      id: 9, 
      type: 'Contrats Commerciaux', 
      parties: 'Entreprise X vs Entreprise Y', 
      etat: 'En attente', 
      document: 'document9.pdf', 
      details: 'Négociation et rédaction de contrats commerciaux entre l\'entreprise X et l\'entreprise Y.', 
      prix: 2800,
      datesImportantes: 'Signature du contrat: 20/06/2024',
      prochainesEtapes: 'Finalisation des termes',
      clientId: 9
    },
    { 
      id: 10, 
      type: 'Droit Pénal', 
      parties: 'Procureur vs Accusé A', 
      etat: 'En attente', 
      document: 'document10.pdf', 
      details: 'Procès pénal impliquant le procureur et l\'accusé A.', 
      prix: 3500,
      datesImportantes: 'Déposition de témoins: 25/06/2024',
      prochainesEtapes: 'Plaidoiries',
      clientId: 10
    },
    { 
      id: 11, 
      type: 'Immigration', 
      parties: 'Individu B vs Autorités d\'Immigration', 
      etat: 'En attente', 
      document: 'document11.pdf', 
      details: 'Procédure d\'immigration pour l\'individu B devant les autorités d\'immigration.', 
      prix: 2500,
      datesImportantes: 'Entretien de visa: 30/06/2024',
      prochainesEtapes: 'Préparation des documents',
      clientId: 11
    },
    { 
      id: 12, 
      type: 'Contentieux Environnemental', 
      parties: 'Association C vs Société D', 
      etat: 'En attente', 
      document: 'document12.pdf', 
      details: 'Contentieux environnemental entre l\'association C et la société D.', 
      prix: 3000,
      datesImportantes: 'Audience devant le tribunal: 05/07/2024',
      prochainesEtapes: 'Plaidoyer pour la protection de l\'environnement',
      clientId: 12
    },
    { 
      id: 13, 
      type: 'Droit de la Propriété Intellectuelle', 
      parties: 'Individu E vs Entreprise F', 
      etat: 'En attente', 
      document: 'document13.pdf', 
      details: 'Contentieux en droit de la propriété intellectuelle entre l\'individu E et l\'entreprise F.', 
      prix: 3200,
      datesImportantes: 'Dépôt des arguments: 10/07/2024',
      prochainesEtapes: 'Évaluation des brevets',
      clientId: 13
    },
    { 
      id: 14, 
      type: 'Droit de la Famille', 
      parties: 'Parent G vs Parent H', 
      etat: 'En attente', 
      document: 'document14.pdf', 
      details: 'Contentieux en droit de la famille entre le parent G et le parent H.', 
      prix: 2800,
      datesImportantes: 'Médiation familiale: 15/07/2024',
      prochainesEtapes: 'Rédaction de l\'accord de garde',
      clientId: 14
    },
    { 
      id: 15, 
      type: 'Contentieux Commercial International', 
      parties: 'Entreprise I vs Entreprise J', 
      etat: 'En attente', 
      document: 'document15.pdf', 
      details: 'Contentieux commercial international entre l\'entreprise I et l\'entreprise J.', 
      prix: 4000,
      datesImportantes: 'Audience arbitrale: 20/07/2024',
      prochainesEtapes: 'Préparation des témoins',
      clientId: 15
    },
    { 
      id: 16, 
      type: 'Contentieux de la Propriété', 
      parties: 'Propriétaire K vs Locataire L', 
      etat: 'En attente', 
      document: 'document16.pdf', 
      details: 'Contentieux de la propriété entre le propriétaire K et le locataire L.', 
      prix: 3000,
      datesImportantes: 'Inspection de la propriété: 25/07/2024',
      prochainesEtapes: 'Évaluation des dommages',
      clientId: 16
    },
  ]);
  

  // État local pour stocker les détails du cas actuellement sélectionné
  const [selectedCaseDetails, setSelectedCaseDetails] = useState(null);

  // Fonction pour afficher les détails d'un cas
  const viewCaseDetails = (details) => {
    setSelectedCaseDetails(details);
  };

  // Fonction pour fermer les détails du cas
  const closeCaseDetails = () => {
    setSelectedCaseDetails(null);
  };

  // Fonction pour modifier l'état d'un cas
  const modifyCaseState = (caseId) => {
    const updatedCases = cases.map((caseItem) => {
      if (caseItem.id === caseId) {
        // Mettre à jour l'état du cas en fonction de la logique de votre application
        // Par exemple, basculer entre "En cours" et "Terminé"
        return {
          ...caseItem,
          etat: caseItem.etat === "En cours" ? "Terminé" : "En cours",
        };
      }
      return caseItem;
    });
    setCases(updatedCases);
  };

  const makeStyle = (status) => {
    if (status === "Terminé") {
      return {
        background: "rgba(145, 254, 159, 0.47)",
        color: "green",
      };
    } else if (status === "En attente") {
      return {
        background: "#D8942F", // couleur dorée pour "En attente"
        color: "#fff", // texte noir pour contraster
      };
    } else {
      return {
        background: "#59bfff",
        color: "white",
      };
    }
  };

  return (
    <div className="container mt-4">
      <h2>Tous les Cas</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Parties</th>
            <th>État</th>
            <th>Document</th>
            <th>Client ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((caseItem) => (
            <tr key={caseItem.id}>
              <td>{caseItem.id}</td>
              <td>{caseItem.type}</td>
              <td>{caseItem.parties}</td>
              <td><span className="status" style={makeStyle(caseItem.etat)}>{caseItem.etat}</span></td>
              <td>
                <a
                  href={caseItem.document}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Télécharger
                </a>
              </td>
              <td>{caseItem.clientId}</td>
              <td>
                <button className="btn btn-primaryDc btn-sm mr-2" onClick={() => viewCaseDetails(caseItem)}>
                  Détails 
                </button>{" "}
                <button className="btn btn-secondary btn-sm mr-2" onClick={() => modifyCaseState(caseItem.id)}>
                  {caseItem.etat === "En cours" ? "Terminer" : "Reprendre"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modale pour afficher les détails du cas */}
      {selectedCaseDetails && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Détails du Cas</h5>
                <button type="button" className="close" onClick={closeCaseDetails}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{selectedCaseDetails.details}</p>
                <p>Prix: {selectedCaseDetails.prix} DH</p>
                <p>Dates Importantes: {selectedCaseDetails.datesImportantes}</p>
                <p>Prochaines Étapes: {selectedCaseDetails.prochainesEtapes}</p>
                {/* Ajoutez d'autres informations du cas ici */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primaryDc" onClick={closeCaseDetails}>Fermer</button>

              </div>
            </div>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default TableDoc;
