import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import NavbarGerant from '../components/NavbarGerant';

const Utilisateur = () => {

    const [message, setMessage] = useState('');

    useEffect(() => {
        // Appel API vers le backend
        axios.get('/api/utilisateur/profil')
            .then(response => {
            setMessage(response.message);
        })
        .catch(error => {
            console.error('Erreur lors de la récuperation du message', error);
        });

    }, []);

    return (
        <div>
            <Header>
                <NavbarGerant nomUtilisateur={message} />
            </Header>
            <h1>Bienvenue, Utilisateur</h1>
            <p>{message}</p>
        </div>
    );
}

export default Utilisateur;