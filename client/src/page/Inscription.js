import SectionAutentification from '../components/SectionAutentification';
import FormInscription from '../components/FormulaireInscription';
import logo from './../assets/logo.png';

const Inscription = () => {

    return (
        <SectionAutentification
            titre="Inscription"
            formulaire={FormInscription}
            phrase="Vous avez déjà un compte :"
            phraseConnexion={<a href="/connexion">Connectez-vous ici</a>}
            logo={<a href='/'><img src={logo} alt="logo" /></a>} 
        />
    );
}

export default Inscription;