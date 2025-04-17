import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SectionAutentification from '../components/SectionAutentification';
import FormInscription from '../components/FormulaireInscription';
import logo from './../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Inscription = () => {

        // On va verifier si l'utilisateur est connecté
        const [user, setUser] = useState({});
        const navigate = useNavigate(); // Hook de React Router pour la redirection
        const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Appel API vers le backend
        axios.get('/api/utilisateur/inscription')
            .then((reponse) => {
                setUser(reponse.data.user);
            }).catch((erreur) => {
                console.error(erreur);
            })
            .finally(() => {
                setLoading(false); // Fin du chargement
            });
    }, []);

    useEffect(() => {
        if (Object.keys(user).length > 0 && !loading){
            navigate('/utilisateur'); // Redirige vers la page de profil   
        }
    }, [loading, user, navigate]);
    
    if (loading) {
        return <div>Chargement...</div>; // Afficher un message de chargement
    }

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