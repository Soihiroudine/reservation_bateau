import React from "react";
import "../css/autantification.css";

const SectionAutentification = ({ titre, formulaire : Formulaire, phrase, phraseConnexion, lien, logo }) => {
    return (
        <section className="sectionAutentification">
            <section className="gauche">
                <h1>{titre}</h1>
                <Formulaire />
            </section>
            <section className="droit">
                <p>{phrase}</p>
                <p>{phraseConnexion} {lien}</p>
                <section className="logo" title="Retour acceuil">{logo}</section>
            </section>
        </section>
    );
}

export default SectionAutentification;