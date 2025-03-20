import React from "react";
import "../css/autantification.css";

const SectionAutentification = ({ titre, formulaire, phrase, phraseConnexion, lien, logo }) => {
    return (
        <section className="sectionAutentification">
            <section className="gauche">
                <h1>{titre}</h1>

                <form method='post' action="/api/utilisateur/connexion">
                    <div>
                        <label for="emailConnexion">E-mail</label>
                        <input type='mail' value="email" id='emailConnexion' name='emailConnexion' />
                    </div>
                    <div>
                        <label for="mdpConnexion">E-mail</label>
                        <input type='password' value="email" id='mdpConnexion' name='mdpConnexion' />
                    </div>
                    <input type='submit' value="Envoyer" />
                </form>

            </section>
            <section className="droit">
                <p>{phrase}</p>
                <p>{phraseConnexion} {lien}</p>
                <p>{logo}</p>
            </section>
        </section>
    );
}

export default SectionAutentification;