import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { notification } from "./ToastNotification";

const FormConnexion = () => {
    const [email, setEmail] = useState('');
    const [mdpConnexion, setMdpConnexion] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Hook de React Router pour la redirection


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDonnee = {
            emailConnexion: email,
            mdpConnexion: mdpConnexion
        };

        try {
            const reponse = await axios.post('/api/utilisateur/connexion', formDonnee, { withCredentials: true });

            // const status = reponse.status;
            const data = reponse.data.user;
            const messageServeur = reponse.data.message;

            setMessage(messageServeur);
            // notification(messageServeur);

            if (Object.keys(data).length > 0) {
                notification("Connexion réussie 🎉", "success");
                setMessage(messageServeur);
                setTimeout(() => {
                    navigate('/utilisateur'); // Redirige vers la page utilisateur après 2 secondes
                }
                    , 1000);
            }
            console.log(message);
        } catch (error) {
            let messageErreur = "Erreur lors de l'ajout du bateau";

            if (error?.response) {
                const { status, data } = error.response;

                switch (status) {
                    case 400:
                        messageErreur = data?.message || "Requête invalide.";
                        break;
                    case 401:
                        messageErreur = data?.message || "Vous devez être connecté pour effectuer cette action.";
                        break;
                    case 403:
                        messageErreur = "Vous n'avez pas les droits pour effectuer cette action.";
                        break;
                    case 404:
                        messageErreur = "Ressource non trouvée.";
                        break;
                    case 500:
                        messageErreur = "Erreur interne du serveur. Veuillez réessayer plus tard.";
                        break;
                    default:
                        messageErreur = data?.message || `Erreur ${status} inconnue.`;
                }
            } else if (error?.request) {
                // Requête faite mais pas de réponse
                messageErreur = "Aucune réponse du serveur. Vérifiez votre connexion.";
            } else {
                // Erreur dans le setup de la requête
                messageErreur = error.message || "Une erreur est survenue.";
            }

            setMessage(messageErreur);
            notification(messageErreur, "error"); // 💥 Toast d'erreur
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="emailConnexion">E-mail</label>
                <input type='email'
                    placeholder="email"
                    id='emailConnexion'
                    name='emailConnexion'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="mdpConnexion">Mot de passe</label>
                <input type='password'
                    placeholder="mot de passe"
                    id='mdpConnexion'
                    name='mdpConnexion'
                    required
                    value={mdpConnexion}
                    onChange={(e) => setMdpConnexion(e.target.value)} />
            </div>

            <input type='submit' value="Envoyer" />

        </form>
    );
}

export default FormConnexion;