import React from 'react';
import axios from 'axios';
import { notification } from "./ToastNotification";

function DeleteBateauForm({ idBateau }) {
  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(`/api/utilisateur/delete-bateau/${idBateau}`,
        // Utilisation de l'URLSearchParams pour envoyer les données
      );

      if (response.status === 200) {
        notification('Bateau supprimé avec succès', "success");
        setTimeout(() => {
          window.location.reload(); // Rafraîchir la page après la suppression
        }, 1000);
        console.log('Bateau supprimé');
      } else {
        console.error('Erreur lors de la suppression');
      }
    } catch (error) {
      console.error('Erreur réseau ou serveur :', error);
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <input type="hidden" name="id" value={idBateau} />
      <button className="annuler" type="submit">Supprimer</button>
    </form>
  );
}

export default DeleteBateauForm;
