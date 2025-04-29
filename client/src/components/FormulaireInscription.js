import axios from 'axios';
import React, { /* useEffect, */ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputPassword from './InputPassword';
import { notification } from "./ToastNotification";

const FormInscription = () => {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [emailInscription, setEmailInscription] = useState('');
    const [mdpInscription, setMdpInscription] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Hook de React Router pour la redirection

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDonnee = {
            nom: nom,
            prenom: prenom,
            emailInscription: emailInscription,
            mdpInscription: mdpInscription
        };

        try {
            const reponse = await axios.post("/api/utilisateur/inscription", formDonnee);

            // Rediriger vers la page de connexion
            if (reponse.status === 200) {
                // Enregistrer l'utilisateur dans le localStorage
                notification(message, "success"); // 💥 Toast de succès

                setTimeout(() => {
                    navigate('/connexion'); // Redirige vers la page de connexion
                }, 1000);

            }
        } catch (error) {
            let messageErreur = "Erreur lors de l'ajout du bateau";

            if (error?.response) {
                const { status, data } = error.response;

                switch (status) {
                    case 400:
                        messageErreur = data?.message || "Requête invalide.";
                        break;
                    case 401:
                        messageErreur = "Vous devez être connecté pour effectuer cette action.";
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
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nom">Nom</label>
                    <input type='text'
                        placeholder="Nom"
                        id='nom'
                        name='nom'
                        value={nom}
                        required
                        onChange={(e) => setNom(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="prenom">Prenom</label>
                    <input type='text'
                        placeholder="Prenom"
                        id='prenom'
                        name='prenom'
                        vallue={prenom}
                        required
                        onChange={(e) => setPrenom(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="emailInscription">E-mail</label>
                    <input type='email'
                        placeholder="email"
                        id='emailInscription'
                        name='emailInscription'
                        value={emailInscription}
                        required
                        onChange={(e) => setEmailInscription(e.target.value)} />
                </div>
                <InputPassword
                    classDiv="inputPassword"
                    label="Mot de passe" 
                    name="mdpInscription" 
                    value={mdpInscription} 
                    idInput="mdpInscription" 
                    onChange={(e) => setMdpInscription(e.target.value)} 
                />
                <input type='submit' value="Envoyer" />
            </form>

        </>
    );
}



export default FormInscription;