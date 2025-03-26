import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import NavbarGerant from '../components/NavbarGerant';
// import { useNavigate } from 'react-router-dom';

const Utilisateur = () => {

    const [connecter, setConnecter] = useState(false);
    const [user, setUser] = useState({});
    // const navigate = useNavigate();

    useEffect(() => {
        // Appel API vers le backend
        axios.get('/api/utilisateur/profil')
            .then(response => {
            setConnecter(response.data.connecter);
            setUser(response.data.user);
        })
        .catch(error => {
            console.error('Erreur lors de la récuperation du message', error);
        });

    //    if(connecter === false) {
    //         alert('Vous êtes déconnecté');
    //         navigate('/connexion'); // Redirige vers la page de connexion
    //     }
    });

    return (
        <div>
            <Header>
                <NavbarGerant nomUtilisateur={user.nomGerant} />
            </Header>
            <h1>Bienvenue, Utilisateur</h1>
            <p>{user.nomGerant}</p>
        </div>
    );
}

export default Utilisateur;