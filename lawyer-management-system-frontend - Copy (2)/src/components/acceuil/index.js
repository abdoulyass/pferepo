import React from "react";
import "./style.css";
import { Lawyerimg, backHome } from "../../assets/images";
import { Link } from "react-router-dom";

function Acceuil() {
  return (
    <div className="acceuil-wrapper">
      <div
        id="acceuil"
        className="containerHome"
        style={{
          backgroundImage: `url(${backHome})`, // Modification ici
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-container">
          <h2 className="h2-acceuil">Votre Solution Juridique Complète</h2>

          <p>
            Bienvenue dans votre guichet unique pour tous vos besoins
            juridiques. Notre équipe d'experts est là pour vous fournir des
            solutions efficaces et personnalisées, afin que vous puissiez
            aborder vos défis juridiques en toute confiance. Explorez nos
            services dès aujourd'hui et découvrez comment nous pouvons vous
            aider à atteindre vos objectifs.
          </p>
          <div className="button-cont">
            <Link to="/login" className="button-link">
              Parler avec un avocat
            </Link>
          </div>
        </div>
        <div className="image-container">
          <img src={Lawyerimg} alt="lawyer-image" className="lawyer-image" />
        </div>
      </div>
    </div>
  );
}

export default Acceuil;
