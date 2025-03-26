import React, { useEffect } from 'react';
import axios from 'axios';
import SectionAutentification from '../components/SectionAutentification';
import FormInscription from '../components/FormulaireInscription';
import logo from './../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Inscription = () => {
    const navigate = useNavigate();
    const [connecter, setConnecter] = React.useState(false);

    useEffect(() => {
        // Appel API vers le backend
        axios.get('/api/utilisateur/inscription')
            .then((reponse) => {
                setConnecter(reponse.data.connecter);
            }).catch((erreur) => {
                console.error(erreur);
            });

            if(connecter) {
                // Redirection vers la page de profil
                navigate('/utilisateur');
            }
    }, [connecter, navigate]);

    return (
        <SectionAutentification
            titre="Inscription"
            formulaire={FormInscription}
            phrase="Vous avez déjà un compte :"
            phraseConnexion={<a href="/connexion">Connectez-vous ici</a>}
            logo={<a href='/'><img src={logo} alt="logo" /></a>} 
        />
    );
}

export default Inscription;