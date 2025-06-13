import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import NavbarGerant from '../components/NavbarGerant';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FormAjoutBateau from '../components/FormAjoutBateau';
import { notification } from "../components/ToastNotification";
import Chargement from '../components/Spinner';
import '../css/afficheTable.css'

const Bateau = () => {

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
                setBateau(response?.data?.bateau); // On récupère les bateaux du gérant
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
                <h1>Bienvenue, <span>{user.nomGerant}</span></h1>

                <div className="container">

                    {/* On affiche les bateaux que le gérant possède */}

                    <div className="listeBateau">
                        <h2>Liste de vos bateaux</h2>
                        {/* Afficher la liste des bateaux ici */}

                        {Array.isArray(bateau) && bateau.length > 0 ? (
                            <table className="responsive-table">
                                <thead>
                                    <tr className="table-header">
                                        <th className='col-1'>Nom</th>
                                        <th className='col-2'>places</th>
                                        <th className='col-3'>supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bateau.map(b => (
                                        <tr key={b.idBateau}  className='table-row'>
                                            <td className='col-1'>{b.nomBateau}</td>
                                            <td className='col-2'>{b.nbPlace}</td>
                                            <td className='col-3'>
                                                <form action="/deleteBateau" method="post">
                                                    <input type="hidden" name="id" value={b.idBateau} />
                                                        <button className='annuler'>supprimer</button>
                                                </form>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>Vous n'avez pas encore de bateaux enregistrés.</p>
                        )}



                        <FormAjoutBateau /> {/* Formulaire d'ajout de bateau */}
                    </div>

                    <div className="listeReservation">
                    </div>
                </div>
            </div>
        );
    }
}

export default Bateau;