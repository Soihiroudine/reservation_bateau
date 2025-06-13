import React from 'react';
import axios from 'axios';

function DeleteBateauForm({ idBateau }) {
  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/deleteBateau', 
        new URLSearchParams({ id: idBateau }), // encodage type formulaire
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (response.status === 200) {
        console.log('Bateau supprimé');
        // Exemple : rafraîchir la page ou mettre à jour la liste
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
