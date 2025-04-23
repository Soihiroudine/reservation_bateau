import axios from 'axios';
import React, { /* useEffect, */ useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            setMessage(reponse.data.message);

            // Rediriger vers la page de connexion
            if (message === "Gerant ajouté") {
                // Enregistrer l'utilisateur dans le localStorage
                notification(message, "success"); // 💥 Toast de succès

                setTimeout(() => {
                    navigate('/connexion'); // Redirige vers la page de connexion
                }
                , 1000);
                
            } else if (message === "Gerant non ajouté") {
                setMessage(reponse.data.message);

                notification(message, "warn"); // 💥 Toast d'erreur

                setTimeout(() => {
                    navigate('/inscription'); // Redirige vers la page d'inscription
                }, 1000);
            }
        } catch (error) {
            setMessage(error.message);
            notification("Erreur lors de l'inscription : " + message, "error"); // 💥 Toast d'erreur
            console.error(message);
        }
        
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label for="nom">Nom</label>
                <input type='text'
                    placeholder="Nom"
                    id='nom' 
                    name='nom'
                    value={nom}
                    required 
                    onChange={(e) => setNom(e.target.value)} />
            </div>
            <div>
                <label for="prenom">Prenom</label>
                <input type='text' 
                    placeholder="Prenom" 
                    id='prenom' 
                    name='prenom'
                    vallue={prenom}
                    required 
                    onChange={(e) => setPrenom(e.target.value)} />
            </div>
            <div>
                <label for="emailInscription">E-mail</label>
                <input type='email' 
                    placeholder="email" 
                    id='emailInscription' 
                    name='emailInscription'
                    value={emailInscription} 
                    required 
                    onChange={(e) => setEmailInscription(e.target.value)} />
            </div>
            <div>
                <label for="mdpInscription">Mot de passe</label>
                <input type='password'
                    placeholder="mot de passe"
                    id='mdpInscription'
                    name='mdpInscription'
                    value={mdpInscription}
                    required
                    onChange={(e) => setMdpInscription(e.target.value)} />
            </div>
            <input type='submit' value="Envoyer" />
        </form>
        
        </>
    );
}



export default FormInscription;