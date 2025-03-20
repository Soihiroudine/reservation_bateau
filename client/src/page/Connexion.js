import React, {/* useEffect,  useState */ } from 'react';
// import axios from 'axios';
import SectionAutentification from '../components/SectionAutentification';
import FormConnexion from '../components/FormulaireConnexion';

const Connexion = () => {

    // const [message, setMessage] = useState('');

    // useEffect(() => {
    //     // Appel API vers le backend
    //     // axios.get('/api/utilisateur/connexion')
    //     //     .then(response => {
    //     //     setMessage(response.message);
    //     // })
    //     // .catch(error => {
    //     //     console.error('Erreur lors de la récuperation du message', error);
    //     // });

    // }, []);

    return (
        <SectionAutentification
            titre="connexion"
            formulaire={FormConnexion}
            phrase="Vous n’avez pas encore de compte :"
            phraseConnexion={"INSCRIVEZ-VOUS"}
            logo="logo" 
        />
    );
}

export default Connexion;