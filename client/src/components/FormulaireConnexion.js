import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormConnexion = () => {
    const [email, setEmail] = useState('');
    const [mdpConnexion, setMdpConnexion] = useState('');
    // const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Hook de React Router pour la redirection

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDonnee = {
            emailConnexion: email,
            mdpConnexion: mdpConnexion
        };

        try {
            const reponse = await axios.post("/api/utilisateur/connexion", formDonnee);
            // setMessage(reponse.data.message);
            if (reponse.data.message === "Email ou mot de passe incorrect") {
                return;
            }
            // // Rediriger vers la page de profil
            else if (reponse.data.message === "Gerant connecté") {
                // Enregistrer l'utilisateur dans le localStorage
                setTimeout(() => {
                    alert("Connexion réussie");
                    navigate('/utilisateur'); // Redirige vers la page de profil
                }, 2000); // Attendre 2 secondes avant la redirection
            }
            console.log(reponse.data);
        } catch (error) {
            console.error(error);
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