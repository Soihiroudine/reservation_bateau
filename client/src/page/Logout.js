import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Accueil = () => {

    const [connecter, setConnecter] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Appel API vers le backend
        axios.get('/api/utilisateur/deconnexion')
            .then(response => {
            setConnecter(response.data.connecter);
        })
        .catch(error => {
            console.error('Erreur lors de la récuperation du message', error);
        });

    
    }, []);

    return (
        <div className="logout-page">
            <h1>Bienvenue sur notre site de réservation de bateau</h1>
            <p>Vous êtes déconnecté</p>
            <button onClick={() => navigate('/connexion')}>Se connecter</button>
            <button onClick={() => navigate('/inscription')}>S'inscrire</button>
        </div>
    );
}

export default Accueil;