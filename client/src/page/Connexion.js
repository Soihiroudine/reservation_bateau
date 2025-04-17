import React, { useEffect } from 'react';
import axios from 'axios';
import SectionAutentification from '../components/SectionAutentification';
import FormConnexion from '../components/FormulaireConnexion';
import logo from './../assets/logo.png';
import { useNavigate } from 'react-router-dom';


const Connexion = () => {

    // On va verifier si l'utilisateur est connecté
    const [user, setUser] = React.useState({});
    const navigate = useNavigate(); // Hook de React Router pour la redirection

    useEffect(() => {
        // Appel API vers le backend
        axios.get('/api/utilisateur/connexion')
            .then(response => {
                setUser(response.data.user);
            })
        .catch(error => {
            console.error('Erreur lors de la récuperation du message', error);
        });
    },[]);

    useEffect(() => {
        if (Object.keys(user).length > 0){
            navigate('/utilisateur'); // Redirige vers la page de profil   
        }
    }, [user, navigate]);
    
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