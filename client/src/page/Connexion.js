import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SectionAutentification from '../components/SectionAutentification';
import FormConnexion from '../components/FormulaireConnexion';
import logo from './../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import Chargement from '../components/Spinner';
import { notification } from "../components/ToastNotification";


const Connexion = () => {

    // On va verifier si l'utilisateur est connecté
    const [user, setUser] = useState({});
    const navigate = useNavigate(); // Hook de React Router pour la redirection
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Appel API vers le backend
        axios.get('/api/utilisateur/connexion')
            .then(response => {
                setUser(response.data.user);
            })
            .catch(error => {
                // Si le statut de la réponse est 401 (Utilisateur non connecté)
                console.error("Erreur lors de la connexion", error);
            })
            .finally(() => {
                setLoading(false); // Fin du chargement
            });
    }, []);

    useEffect(() => {
        if (Object.keys(user).length > 0 && !loading) {
            navigate('/utilisateur'); // Redirige vers la page de profil   
        }
    }, [loading, user, navigate]);

    if (loading) {
        <Chargement />; // ou un spinner
    }

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