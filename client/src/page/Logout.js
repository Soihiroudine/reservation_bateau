import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../css/logout.css";
import logo from './../assets/logo.png';

const Logout = () => {

    const [connecter, setConnecter] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Appel API vers le backend
        axios.get('/api/utilisateur/deconnexion')
            .then(response => {
                setConnecter(response.data.connecter);
                if (!connecter) {
                    setTimeout(() => {
                        navigate('/connexion'); // Redirige vers la page de connexion
                    }, [1000]); // Redirige vers la page d'accueil après 2 secondes
                }
        })
        .catch(error => {
            console.error('Erreur lors de la récuperation du message', error);
        });
    }, [navigate, connecter]);

    return (
        <div className="logout-page">
            <a href='/'><img src={logo} alt="logo" /></a>
            <h1>Vous êtes déconnecté</h1>
        </div>
    );
}

export default Logout;