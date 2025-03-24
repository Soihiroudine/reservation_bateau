import React from 'react';

const FormConnexion = () => {
    return (
        <form method='post' action="/api/utilisateur/connexion">
            <div>
                <label for="emailConnexion">E-mail</label>
                <input type='email' placeholder="email" id='emailConnexion' name='emailConnexion' required/>
            </div>
            <div>
                <label for="mdpConnexion">Mot de passe</label>
                <input type='password' placeholder="mot de passe" id='mdpConnexion' name='mdpConnexion' required/>
            </div>
            <input type='submit' value="Envoyer" />
        </form>
    );
}

export default FormConnexion;