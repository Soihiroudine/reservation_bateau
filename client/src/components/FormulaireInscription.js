import React from 'react';

const FormInscription = () => {
    return (
        <form method='post' action="/api/utilisateur/Inscription">
            <div>
                <label for="nom">Nom</label>
                <input type='text' placeholder="Nom" id='nom' name='nom' required />
            </div>
            <div>
                <label for="prenom">Prenom</label>
                <input type='text' placeholder="Prenom" id='prenom' name='prenom' required />
            </div>
            <div>
                <label for="emailInscription">E-mail</label>
                <input type='email' placeholder="email" id='emailInscription' name='emailInscription' required />
            </div>
            <div>
                <label for="mdpInscription">Mot de passe</label>
                <input type='password' placeholder="mot de passe" id='mdpInscription' name='mdpInscription' required />
            </div>
            <input type='submit' value="Envoyer" />
        </form>
    );
}

export default FormInscription;