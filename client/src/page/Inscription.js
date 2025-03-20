import React, {/* useEffect,  useState */ } from 'react';
// import axios from 'axios';
import SectionAutentification from '../components/SectionAutentification';
import FormConnexion from '../components/FormulaireConnexion';

const Inscription = () => {

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
            titre="Inscription"
            formulaire={FormConnexion}
            phrase="Vous avez déjà un compte :"
            phraseConnexion={"connectez vous ICI"}
            logo="logo" 
        />
    );
}

export default Inscription;