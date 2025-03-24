import React, {/* useEffect,  useState */ } from 'react';
// import axios from 'axios';
import SectionAutentification from '../components/SectionAutentification';
import FormConnexion from '../components/FormulaireConnexion';
import logo from './../assets/logo.png';

const Connexion = () => {
    return (
        <SectionAutentification
            titre="connexion"
            formulaire={FormConnexion}
            phrase="Vous n’avez pas encore de compte :"
            phraseConnexion={<a href="/inscription">Inscrivez-vous ici</a>}
            logo={<a href='/'><img src={logo} alt="logo" /></a>} 
        />
    );
}

export default Connexion;