import React from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import logo from './../assets/logo.png';

const NonExistant = () => {

    const navigate = useNavigate(); // Hook de React Router pour la redirection
    return (
            <div className="logout-page">
                <a href='/'><img src={logo} alt="logo" /></a>
                <h1>Erreur 404</h1>
                <div>
                    <button onClick={() => navigate('/connexion')}>Se connecter</button>
                    <button onClick={() => navigate('/inscription')}>S'inscrire</button>
                </div>
                
            </div>
        );
}

export default NonExistant;