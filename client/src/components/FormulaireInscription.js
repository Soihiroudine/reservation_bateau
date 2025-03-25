import axios from 'axios';
import React, { /* useEffect, useState */ } from 'react';

// const FormInscription = () => {

//     const [nom, setNom] = useState('');
//     const [prenom, setPrenom] = useState('');
//     const [emailInscription, setEmailInscription] = useState('');
//     const [mdpInscription, setMdpInscription] = useState('');

//     useEffect(() => {
//         console.log(nom);
//         console.log(prenom);
//         console.log(emailInscription);
//         console.log(mdpInscription);
//         setNom(nom);
//         setPrenom(prenom);
//         setEmailInscription(emailInscription);
//         setMdpInscription(mdpInscription);
//     }, [nom, prenom, emailInscription, mdpInscription]);

//     // const handleChange = (event) => {
//     //     setNom({ nom: event.target.value });
//     // }

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const user = {
//             nom: nom,
//             prenom: prenom,
//             emailInscription: emailInscription,
//             mdpInscription: mdpInscription
//         };

//         axios.post(`/api/utilisateur/inscription`, { user })
//             .then(res => {
//                 console.log(res);
//                 console.log(res.data);
//         });
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label for="nom">Nom</label>
//                 <input type='text' placeholder="Nom" id='nom' name='nom' required />
//             </div>
//             <div>
//                 <label for="prenom">Prenom</label>
//                 <input type='text' placeholder="Prenom" id='prenom' name='prenom' required />
//             </div>
//             <div>
//                 <label for="emailInscription">E-mail</label>
//                 <input type='email' placeholder="email" id='emailInscription' name='emailInscription' required />
//             </div>
//             <div>
//                 <label for="mdpInscription">Mot de passe</label>
//                 <input type='password' placeholder="mot de passe" id='mdpInscription' name='mdpInscription' required />
//             </div>
//             <input type='submit' value="Envoyer" />
//         </form>
//     );
// }

class FormInscription extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            nom: '',
            prenom: '',
            emailInscription: '',
            mdpInscription: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            emailInscription: this.state.emailInscription,
            mdpInscription: this.state.mdpInscription
        };

        axios.post(`/api/utilisateur/inscription`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label for="nom">Nom</label>
                    <input type='text' placeholder="Nom" id='nom' name='nom' required onChange={this.handleChange} />
                </div>
                <div>
                    <label for="prenom">Prenom</label>
                    <input type='text' placeholder="Prenom" id='prenom' name='prenom' required onChange={this.handleChange} />
                </div>
                <div>
                    <label for="emailInscription">E-mail</label>
                    <input type='email' placeholder="email" id='emailInscription' name='emailInscription' required onChange={this.handleChange} />
                </div>
                <div>
                    <label for="mdpInscription">Mot de passe</label>
                    <input type='password' placeholder="mot de passe" id='mdpInscription' name='mdpInscription' required onChange={this.handleChange} />
                </div>
                <input type='submit' value="Envoyer" />
            </form>
        );
    }
}

export default FormInscription;