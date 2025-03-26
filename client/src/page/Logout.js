import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Accueil = () => {

    const [connecter, setConnecter] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Appel API vers le backend
        axios.get('/api/utilisateur/logout')
            .then(response => {
            setConnecter(response.data.connecter);
        })
        .catch(error => {
            console.error('Erreur lors de la récuperation du message', error);
        });

        if(!connecter) {
            alert('Vous êtes déconnecté');
            navigate('/connexion');
        }

    }, [connecter, navigate]);

    return (
        <div>
            {/* <NavbarDafault /> */}
        </div>
    );
}

export default Accueil;