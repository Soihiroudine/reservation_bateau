import React from 'react';

const FormConnexion = () => {
    return (
        <form method='post' action="/api/utilisateur/connexion">
            <div>
                <label for="emailConnexion">E-mail</label>
                <input type='mail' value="email" id='emailConnexion' name='emailConnexion' />
            </div>
            <div>
                <label for="mdpConnexion">E-mail</label>
                <input type='mail' value="email" id='mdpConnexion' name='mdpConnexion' />
            </div>
            <input type='submit' value="Envoyer" />
        </form>
    );
}

export default FormConnexion;