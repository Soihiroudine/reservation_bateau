import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import NavbarGerant from '../components/NavbarGerant';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Utilisateur = () => {

    const [user, setUser] = useState({});
    // const [bateau, setBateau] = useState({});
    // const [reservations, setReservations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Appel API vers le backend pour récupérer les bateaux du gérant
        axios.get('/api/utilisateur/profil')
            .then(response => {
                setUser(response.data.user);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des bateaux', error);
            });
    }, []);

    useEffect(() => {
        if (Object.keys(user).length === 0) {
            alert('Vous devez vous connecter pour accéder à cette page');
            navigate('/connexion'); // Redirige vers la page de connexion
        }
    }, [user, navigate]);

    return (
        <div>
            <Header>
                <NavbarGerant nomUtilisateur={user.nomGerant} />
            </Header>

            <div className="container">

                {/* On affiche les bateaux que le gérant possède */}

                <div className="listeBateau">
                    <h2>Liste de vos bateaux</h2>
                    {/* Afficher la liste des bateaux ici */}
                    <ul>
                        {/* {bateau.map((bateau, index) => (
                            <li key={index}>{bateau.nomBateau}</li>
                        ))} */}
                    </ul>

                    <a href="/ajouter-bateau" className="btn btn-primary">Ajouter un bateau</a>
                </div>

                
                {/* On affiche l'historique des réservation qui a été fait pour un bateau du gérant */}
                {/* <div className="historiqueReservation"> */}
                    {/* <h2>Historique des réservations</h2> */}
                    {/* Afficher l'historique des réservations ici */}
                    {/* <ul>
                        {user.reservations && user.reservations.map((reservation, index) => (
                            <li key={index}>{reservation.nomBateau} - {reservation.dateReservation}</li>
                        ))}
                    </ul> */}
                {/* </div> */}
            </div>
            <h1>Bienvenue, {user.nomGerant}</h1>
        </div>
    );
}

export default Utilisateur;