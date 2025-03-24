import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import NavbarDafault from '../components/Navbar';

const Reservation = () => {

    const [message, setMessage] = useState('');

    useEffect(() => {
        // Appel API vers le backend
        axios.get('/api/reservation')
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
                <NavbarDafault/>
            </Header>
            <h1>Bienvenue, reservation</h1>
            <p>{message}</p>
        </div>
    );
}

export default Reservation;