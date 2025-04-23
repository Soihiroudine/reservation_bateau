import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import NavbarGerant from '../components/NavbarGerant';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FormAjoutBateau from '../components/FormAjoutBateau';
import { notification } from "../components/ToastNotification";

const Utilisateur = () => {

    const [user, setUser] = useState({});

    const [bateau, setBateau] = useState([]);
    // const [reservations, setReservations] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Appel API vers le backend pour récupérer les bateaux du gérant
        axios.get('/api/utilisateur/affichage')
            .then(response => {
                setUser(response.data.user);
                setBateau(response.data.bateau); // On récupère les bateaux du gérant
                // setReservations(response.data.reservations); // On récupère les réservations du gérant
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des bateaux', error);
                // navigate('/connexion'); // Redirige vers la page de connexion en cas d'erreur
            })
            .finally(() => {
                setLoading(false); // Fin du chargement
            });
    }, []);

    useEffect(() => {
        if (!loading && Object.keys(user).length > 0) {
            notification('Vous devez vous connecter pour accéder à cette page', "info"); // 💥 Toast d'information
            setTimeout(() => {
                navigate('/connexion'); // Redirige vers la page de connexion après 2 secondes
            }, 2000);
        }
    }, [loading, user, navigate]);

    if (loading) {
        return <div>Chargement...</div>; // Afficher un message de chargement
    }

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
                        {bateau.length === 0 ? (
                            <p>Vous n'avez pas encore de bateaux enregistrés.</p>
                        ) : (
                            <ul>
                                {bateau.map(b => <li key={b.idBateau}>{b.nomBateau}</li>)}
                            </ul>
                        )}
                    </ul>

                    <FormAjoutBateau /> {/* Formulaire d'ajout de bateau */}
                </div>
            </div>
            <h1>Bienvenue, {user.nomGerant}</h1>
        </div>
    );
}

export default Utilisateur;