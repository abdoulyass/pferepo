import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./style.css";

const CaseDetails = () => {
  const { id } = useParams();
  const [caseDetails, setCaseDetails] = useState(null);

  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/cas/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`, // Inclure le jeton d'authentification
          },
        });
        setCaseDetails(response.data);
      } catch (error) {
        console.error('Error fetching case details:', error);
      }
    };

    fetchCaseDetails();
  }, [id]);

  return (
    <div className="AppClientsuive">
      <div>
        {/* Ajoutez vos images ici */}
        <div className="middleContainersuivie">
          {caseDetails && (
            <div className="containerS mt-4">
              <h2 className="mb-4">Détails du Cas</h2>
              <div className="list-groupS">
                <div className="list-group-itemS">
                  <h5 className="mb-1">{caseDetails.type}</h5><hr />
                  <p className="mb-1"><strong>Statut:</strong> {caseDetails.statut}</p>
                  <p className="mb-1"><strong>client</strong> {caseDetails.datesImportantes}</p>
                  
                  <p className="mb-1"><strong>Prochaines Étapes:</strong> {caseDetails.prochainesEtapes}</p>
                  <p className="mb-1"><strong>deroulement</strong> {caseDetails.prochainesEtapes}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CaseDetails;
