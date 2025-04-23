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

            if (Object.keys(data).length === 0) {
                setMessage(messageServeur);
                notification("Identifiants incorrects", "warn"); // 💥 Toast d'erreur
                navigate('/connexion');
                return;
            }else if (Object.keys(data).length > 0) {
                notification("Connexion réussie 🎉", "success");
                setTimeout(() => {
                    navigate('/utilisateur'); // Redirige vers la page utilisateur après 2 secondes
                }
                , 1000);
            }
            console.log(message);
        }catch (error) {
            setMessage(error.message);
            notification("Erreur lors de la connexion : " + error.message, "error"); // 💥 Toast d'erreur
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label for="emailConnexion">E-mail</label>
                <input type='email' 
                    placeholder="email" 
                    id='emailConnexion' 
                    name='emailConnexion' 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label for="mdpConnexion">Mot de passe</label>
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