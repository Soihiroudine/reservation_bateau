import React, { useEffect } from 'react';
import axios from 'axios';
import SectionAutentification from '../components/SectionAutentification';
import FormConnexion from '../components/FormulaireConnexion';
import logo from './../assets/logo.png';

const Connexion = () => {

    useEffect(() => {
        // On va verifier si l'utilisateur est connecté
        // On va utiliser un fichier json pour stocker les informations de l'utilisateur
        // On va utiliser un fichier json pour vérifier si l'utilisateur est connecté
        // Appel API vers le backend
        axios.get('/api/utilisateur/connexion');
    }, []);
    
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