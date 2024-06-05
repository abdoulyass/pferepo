import React from 'react'
import './style.css';
import { Personne , Personne1 ,Personne2 ,Personne3 } from '../../assets/images';
import StarRatings from 'react-star-ratings';



function Apropos() {
  return (
    <div id='apropos' className='offerings-wrapper'>
      <h3 className="offerings-subtitle">Qui Nous Fait Confiance</h3>
      <h1 className="offerings-title">Rejoignez nos clients satisfaits.</h1>
      <div  className='containeroff'>
        <div className='avis'>
          <img src={Personne3} alt='views' />
          <h3 >Marie Dubois</h3>
          <p>Avocate en droit de la famille</p>
          <StarRatings
            rating={5}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="5px"
          />
          <hr />
          <p>
          "Ce système de gestion juridique simplifie énormément notre travail quotidien. Un incontournable pour les cabinets d'avocats."
          </p>

          
        </div>
        <div className='avis'>
        <img src={Personne} alt='views' />
          <h3>Alexandre Martin</h3>
          <p>Juriste d'entreprise</p>
          <StarRatings
            rating={4}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="5px"
          />
          <hr />
          <p>
          "Très impressionné par la facilité d'utilisation et l'efficacité de ce système. Il rend la gestion des documents juridiques très fluide."
          </p>
        </div>
        
        <div className='avis' alt='views'>
        <img src={Personne2} />
          <h3>Juliette Blanc</h3>
          <p>Étudiante en droit international</p>
          <StarRatings
            rating={4.5}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="5px"
          />
          <hr />
          <p>
          "J'adore la fonctionnalité de recherche avancée de ce système. Cela rend la recherche de jurisprudence tellement plus efficace."
          </p>
        </div>
        <div className='avis' alt='views'>
        <img src={Personne1} />
          <h3>Nicolas Durand</h3>
          <p>Avocat en droit du travail</p>
          <StarRatings
            rating={5}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="5px"
          />
          <hr />
          <p>
          "Très impressionné par la facilité d'utilisation et l'efficacité de ce système. Il rend la gestion des documents juridiques très fluide."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Apropos;