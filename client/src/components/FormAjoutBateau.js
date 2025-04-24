import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { notification } from "./ToastNotification";
import Modal from 'react-modal';
import '../css/FormAjoutBateau.css'; // Importer le fichier CSS pour le style de

const FormAjoutBateau = () => {
    const [nomBateau, setNomBateau] = useState('');
    const [capacite, setCapacite] = useState(0);
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Hook de React Router pour la redirection

    // État pour gérer l'ouverture et la fermeture de la modale
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fonction pour ouvrir la modale
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Fonction pour fermer la modale
    const closeModal = () => {
        setIsModalOpen(false);
        resetForm(); // Réinitialiser le formulaire à chaque fermeture de la modale
    };

    // Fonction pour réinitialiser le formulaire
    const resetForm = () => {
        setNomBateau('');
        setCapacite('');
    };

    // Fonction pour gérer la soumission du formulaire

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('nomBateau', nomBateau);
        formData.append('capacite', capacite);

        try {
            const response = await axios.post('/api/utilisateur/ajout-bateau', formData, {
                withCredentials: true});

            // const messageServeur = response.data.message;

            if (response.status === 200) {
                notification("Bateau ajouté avec succès 🎉", "success");
                closeModal(); // Fermer la modale après l'ajout réussi
                setTimeout(() => {
                    navigate('/utilisateur'); // Redirige vers la page utilisateur après 1 secondes
                }, 1000);
            }
        } catch (error) {
            const messageErreur = error?.response?.data?.message;
            setMessage(messageErreur || "Erreur lors de l'ajout du bateau");
            notification(message, "error"); // 💥 Toast d'erreur
        }
    }

    return (
        <div id="formAjoutBateau">
            <button onClick={openModal} className="btn btn-primary">Ajouter un bateau</button>

            {/* Modale pour ajouter un bateau */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Ajouter un bateau"
                className="modal"
                overlayClassName="overlay"
            >
                <div className="modal-header">
                    <h2>Ajouter un bateau</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nomBateau">Nom du bateau</label>
                            <input type='text'
                                placeholder="Nom du bateau"
                                id='nomBateau'
                                name='nomBateau'
                                value={nomBateau}
                                onChange={(e) => setNomBateau(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="capacite">Capacité (en personnes)</label>
                            <input type='number'
                                placeholder="Capacité"
                                id='capacite'
                                name='capacite'
                                value={capacite}
                                onChange={(e) => setCapacite(e.target.value)}
                                required
                            />
                        </div>
                        <div className='bouton'>
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                            <button type="button" onClick={closeModal} className="annuler">Annuler</button>
                        </div>
                    </form>
                </div>
            </Modal>

        </div>
    );
}
export default FormAjoutBateau;