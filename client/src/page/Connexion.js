import React, { useEffect } from 'react';
import axios from 'axios';
import SectionAutentification from '../components/SectionAutentification';
import FormConnexion from '../components/FormulaireConnexion';
import logo from './../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Connexion = () => {
    const navigate = useNavigate();
    const [connecter, setConnecter] = React.useState(false);

    useEffect(() => {
        // On va verifier si l'utilisateur est connecté
        // Appel API vers le backend
        axios.get('/api/utilisateur/connexion')
            .then((reponse) => {
                setConnecter(reponse.data.connecter);
            }).catch((erreur) => {
                console.error(erreur);
            });

            if(connecter) {
                // Redirection vers la page de profil
                navigate('/utilisateur');
            }
    });
    
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