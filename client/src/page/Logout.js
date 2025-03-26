import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarDafault from '../components/Navbar';
import Header from '../components/Header';

const Accueil = () => {

    const [message, setMessage] = useState('');

    useEffect(() => {
        // Appel API vers le backend
        axios.get('/api/accueil')
            .then(response => {
            setMessage(response.message);
        })
        .catch(error => {
            console.error('Erreur lors de la récuperation du message', error);
        });

    }, []);

    return (
        <div>
            {/* <NavbarDafault /> */}
            <Header>
                <NavbarDafault/>
            </Header>
            <h1>Bienvenue sur mon site Web !</h1>
            <p>{message}</p>
        </div>
    );
}

export default Accueil;