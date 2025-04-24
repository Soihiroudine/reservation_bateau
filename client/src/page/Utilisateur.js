import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import NavbarGerant from '../components/NavbarGerant';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FormAjoutBateau from '../components/FormAjoutBateau';
import { notification } from "../components/ToastNotification";
import Chargement from '../components/Spinner';

const Utilisateur = () => {

    const [user, setUser] = useState({});

    const [bateau, setBateau] = useState([]);
    // const [reservations, setReservations] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Appel API vers le backend pour récupérer les bateaux du gérant
        axios.get('/api/utilisateur/affichage', { withCredentials: true })
            .then(response => {
                // Si l'utilisateur est connecté, on récupère les bateaux du gérant
                setUser(response.data.user);
                setBateau(response.data.bateau); // On récupère les bateaux du gérant
                console.log("Bateaux récupérés :", response?.data?.bateau);
                // setReservations(response.data.reservations); // On récupère les réservations du gérant
            })
            .catch(error => {
                // Si le statut de la réponse est 401 (Utilisateur non connecté)
                if (error.response && error.response.status === 401) {
                    notification('Vous devez vous connecter pour accéder à cette page', "info");
                } else {
                    console.error("Erreur lors de la récupération des bateaux", error);
                }
            })
            .finally(() => {
                setLoading(false); // Fin du chargement
            });
    }, []);

    useEffect(() => {
        if (!loading) {
            if (!user || !user.idGerant) {
                notification('Vous devez vous connecter pour accéder à cette page', "info");
                setTimeout(() => {
                    navigate('/connexion');
                }, 2000);
            }
        }
    }, [loading, user, navigate]);


    if (!loading && (!user || !user.idGerant)) {
        <Chargement /> // ou un spinner
    } else {
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

                        {Array.isArray(bateau) && bateau.length > 0 ? (
                            <ul>
                                {bateau.map(b => <li key={b.idBateau}>{b.nomBateau}</li>)}
                            </ul>
                        ) : (
                            <p>Vous n'avez pas encore de bateaux enregistrés.</p>
                        )}



                        <FormAjoutBateau /> {/* Formulaire d'ajout de bateau */}
                    </div>
                </div>
                <h1>Bienvenue, {user.nomGerant}</h1>
            </div>
        );
    }
}

export default Utilisateur;