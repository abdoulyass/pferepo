import React, { useState, useEffect } from "react";
import "./style.css";

const TableRev = () => {
  const [revenueData, setRevenueData] = useState([
    { id: 1, caseId: 1, clientId: 1, amount: 100 },
    { id: 2, caseId: 2, clientId: 2, amount: 150 },
    { id: 3, caseId: 3, clientId: 3, amount: 200 },
    // Ajoutez d'autres données fictives ici
  ]);

  const [caseDetails, setCaseDetails] = useState([]);
  const [clientDetails, setClientDetails] = useState([]);

  useEffect(() => {
    calculateTotalRevenue();
  }, [caseDetails, clientDetails]); // Mettre à jour le revenu total lorsque les détails des cas ou des clients changent

  const calculateTotalRevenue = () => {
    
   
     
    
      let total = data.reduce((acc, item) => acc + item.amount, 0);
    
    return total;
  };

  const showRevenueDetailsByCase = () => {
    setCaseDetails([
      { 
        id: 1, 
        caseId: 1, 
        detail: "Procédure de divorce à l'amiable entre Alice et Bob Smith.", 
        amount: 1500 
      },
      { 
        id: 2, 
        caseId: 2, 
        detail: "Contentieux commercial entre ABC Corporation et XYZ Entreprises.", 
        amount: 2000 
      },
      { 
        id: 3, 
        caseId: 3, 
        detail: "Règlement de la succession de feu M. Johnson au sein de sa famille.", 
        amount: 3000 
      },
      { 
        id: 4, 
        caseId: 4, 
        detail: "Contentieux en droit du travail entre l'employé Z et l'entreprise W.", 
        amount: 2500 
      },
      { 
        id: 5, 
        caseId: 5, 
        detail: "Litige foncier entre M. et Mme Davis et M. Johnson concernant une propriété.", 
        amount: 3500 
      },
      { 
        id: 6, 
        caseId: 6, 
        detail: "Cas de responsabilité civile impliquant la victime Y et la compagnie d'assurance Z.", 
        amount: 2800 
      },
      { 
        id: 7, 
        caseId: 7, 
        detail: "Contentieux en droit des sociétés entre la Société Alpha et la Société Beta.", 
        amount: 3200 
      },
      { 
        id: 8, 
        caseId: 8, 
        detail: "Contentieux de la propriété intellectuelle entre l'entreprise A et l'entreprise B.", 
        amount: 4000 
      },
      { 
        id: 9, 
        caseId: 9, 
        detail: "Négociation et rédaction de contrats commerciaux entre l'entreprise X et l'entreprise Y.", 
        amount: 2800 
      },
      { 
        id: 10, 
        caseId: 10, 
        detail: "Procès pénal impliquant le procureur et l'accusé A.", 
        amount: 3500 
      },
      { 
        id: 11, 
        caseId: 11, 
        detail: "Procédure d'immigration pour l'individu B devant les autorités d'immigration.", 
        amount: 2500 
      },
      { 
        id: 12, 
        caseId: 12, 
        detail: "Contentieux environnemental entre l'association C et la société D.", 
        amount: 3000 
      },
      { 
        id: 13, 
        caseId: 13, 
        detail: "Contentieux en droit de la propriété intellectuelle entre l'individu E et l'entreprise F.", 
        amount: 3200 
      },
      { 
        id: 14, 
        caseId: 14, 
        detail: "Contentieux en droit de la famille entre le parent G et le parent H.", 
        amount: 2800 
      },
      { 
        id: 15, 
        caseId: 15, 
        detail: "Contentieux commercial international entre l'entreprise I et l'entreprise J.", 
        amount: 4000 
      },
      { 
        id: 16, 
        caseId: 16, 
        detail: 'Contentieux de la propriété entre le propriétaire K et le locataire L.', 
        amount: 3000 
      },
      
      // Ajoutez d'autres cas ici
    ]);
    setClientDetails([]);
  };
  

  const data = [
    { id: 1, clientId: 1, NomC: "John Doe", amount: 2200 },
    { id: 2, clientId: 2, NomC: "Jane Smith", amount: 2650 },
    { id: 3, clientId: 3, NomC: "Robert Johnson", amount: 3800 },
    { id: 4, clientId: 4, NomC: "Emily Brown", amount: 3050 },
    { id: 5, clientId: 5, NomC: "Michael Wilson", amount: 4000 },
    { id: 6, clientId: 6, NomC: "Sarah Lee", amount: 4500 },
    { id: 7, clientId: 7, NomC: "David Martinez", amount: 5000 },
    { id: 8, clientId: 8, NomC: "Jennifer Taylor", amount: 5500 },
    { id: 9, clientId: 9, NomC: "Christopher Thomas", amount: 6000 },
    { id: 10, clientId: 10, NomC: "Amanda Garcia", amount: 6550 },
    { id: 11, clientId: 11, NomC: "James Rodriguez", amount: 750 },
    { id: 12, clientId: 12, NomC: "Jessica Hernandez", amount: 750 },
    { id: 13, clientId: 13, NomC: "Daniel Nguyen", amount: 800 },
    { id: 14, clientId: 14, NomC: "Taylor Wilson", amount: 850 },
    { id: 15, clientId: 15, NomC: "Alexis Brown", amount: 900 },
    // Ajoutez d'autres données fictives ici
  ];

  const showRevenueDetailsByClient = () => {
    setClientDetails([
      { id: 1, clientId: 1, NomC: "John Doe", amount: 2200 },
      { id: 2, clientId: 2, NomC: "Jane Smith", amount: 2650 },
      { id: 3, clientId: 3, NomC: "Robert Johnson", amount: 3800 },
      { id: 4, clientId: 4, NomC: "Emily Brown", amount: 3050 },
      { id: 5, clientId: 5, NomC: "Michael Wilson", amount: 4000 },
      { id: 6, clientId: 6, NomC: "Sarah Lee", amount: 4500 },
      { id: 7, clientId: 7, NomC: "David Martinez", amount: 5000 },
      { id: 8, clientId: 8, NomC: "Jennifer Taylor", amount: 5500 },
      { id: 9, clientId: 9, NomC: "Christopher Thomas", amount: 6000 },
      { id: 10, clientId: 10, NomC: "Amanda Garcia", amount: 6550 },
      { id: 11, clientId: 11, NomC: "James Rodriguez", amount: 750 },
      { id: 12, clientId: 12, NomC: "Jessica Hernandez", amount: 750 },
      { id: 13, clientId: 13, NomC: "Daniel Nguyen", amount: 800 },
      { id: 14, clientId: 14, NomC: "Taylor Wilson", amount: 850 },
      { id: 15, clientId: 15, NomC: "Alexis Brown", amount: 900 },
      // Ajoutez d'autres données fictives ici
    ]);
    setCaseDetails([]);
  };

  return (
    <div className="container-rev mt-4">
      <h2 className="title-rev text-center">Revenu Total <h4 className="total-rev text-center">Revenu Total: {calculateTotalRevenue()} €</h4></h2>
      <div className="row-rev">
        <div className="col-md-8">
          <button className="btn btn-info btn-block mb-3" onClick={showRevenueDetailsByCase}>
            Détails par cas
          </button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-det btn-secondary btn-block mb-3" onClick={showRevenueDetailsByClient}>
            Détails par client
          </button>
        </div>
      </div>
      <div className="mt-3">
        {caseDetails.length > 0 && (
          <div>
            <h4 className="text-center">Détails par cas</h4>
            <ul className="list">
              {caseDetails.map((detail) => (
                <li key={detail.id} className="list-item">
                  {detail.detail}: {detail.amount} DH
                </li>
              ))}
            </ul>
          </div>
        )}
        {clientDetails.length > 0 && (
          <div>
            <h4 className="text-center">Détails par client</h4>
            <ul className="list">
              {clientDetails.map((detail) => (
                <li key={detail.id} className="list-item">
                  {detail.NomC}: {detail.amount} DH
                </li>
              ))}
            </ul>
          </div>
        )}
        {(caseDetails.length > 0 || clientDetails.length > 0) && (
          <h4 className="total-rev text-center">Revenu Total: {calculateTotalRevenue()} €</h4>
        )}
      </div>
    </div>
  );
};

export default TableRev;
