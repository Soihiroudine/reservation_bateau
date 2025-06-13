import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import NavbarGerant from '../components/NavbarGerant';
import { notification } from '../components/ToastNotification';
import { useNavigate } from 'react-router-dom';
import Chargement from '../components/Spinner';
import '../css/profil.css'; // Assurez-vous d'importer le fichier CSS pour le style

const Profil = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Hook de React Router pour la redirection

    useEffect(() => {
        // Appel API vers le backend pour récupérer les informations de l'utilisateur
        axios.get('/api/utilisateur/profil', { withCredentials: true })
            .then(response => {
                setUser(response.data.user);
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    notification('Vous devez vous connecter pour accéder à cette page', "info");
                } else {
                    console.error("Erreur lors de la récupération de l'utilisateur", error);
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
                    navigate('/connexion'); // Redirige vers la page de connexion après 2 secondes
                }, 2000);
            }
        }
    }, [loading, user, navigate]);

    if (!loading && (!user || !user.idGerant)) {
        <Chargement size={60} color="#ff9900" text="Veuillez patienter..." />
    } else {
    return (
        <div>
            <Header>
                <NavbarGerant nomUtilisateur={user.nomGerant} />
            </Header>
            <div className="profil">
                <h1>Profil de l'utilisateur</h1>
                <div className="profil-info">
                        <p><strong>Nom :</strong> {user.nomGerant}</p>
                        <p><strong>Prénom :</strong> {user.prenomGerant}</p>
                        <p><strong>Email :</strong> {user.emailGerant}</p>
                        {/* Ajoutez d'autres informations utilisateur ici */}
                </div>

                <button className='modifMDP'>Modifier le mot de passe</button>

                <div className='lien'>
                    <a href='/bateau'>Accés bateau</a>
                    <a href='/listeReservation'>Accés réservation</a>
                </div>
            </div>
        </div>
    );}
}

export default Profil;